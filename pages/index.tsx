import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { PostData, getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/Date';
import { ReactElement } from 'react';
import { GetStaticProps, GetStaticPropsResult } from 'next';

interface Props {
  allPostsData: PostData[];
}

export default function Home({allPostsData}:Props):ReactElement {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps:GetStaticProps = async (/*{ props, preview, params }*/):Promise<GetStaticPropsResult<Props>> => {
  const allPostsData:PostData[] = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

/**
 * This is an example if we want to use serside rendering
 * export async function getServerSideProps(context) {
    return {
      props: {
        // props for your component
      },
    };
  }
 */