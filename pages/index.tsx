import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { PostResponse, getAllPosts } from '../lib/posts';
import Link from 'next/link';
import { ReactElement } from 'react';
import { GetStaticProps, GetStaticPropsResult } from 'next';

interface Props {
  posts: PostResponse[];
}

export default function Home({ posts }: Props): ReactElement {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts
            .map(({ id, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  User:
                </small>
              </li>
            ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (/*{ props, preview, params }*/): Promise<GetStaticPropsResult<Props>> => {
  const posts: PostResponse[] = await getAllPosts();
  return {
    props: {
      posts
    }
  }
}

/**
 * This is an example if we want to use serside rendering
 * export const getServerSideProps: GetServerSideProps = async (context){
    return {
      props: {
        // props for your component
      },
    };
  }
 */