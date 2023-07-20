import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { PostResponse } from '../lib/posts';
import Link from 'next/link';
import { ReactNode } from 'react';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { gql } from '@apollo/client';
import { client } from '../lib/apolloClient';


const GET_ALL_POSTS_QUERY = gql`
query getPosts {
  posts {
    data {
      id
      title
      body
    }
  }
 }
`;

interface Props {
  posts: PostResponse[];
}

export default function Home({ posts }): ReactNode {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview, params }): Promise<GetStaticPropsResult<Props>> => {
  const { data } = await client.query({ query: GET_ALL_POSTS_QUERY });

  return {
    props: {
      posts: data.posts.data,
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