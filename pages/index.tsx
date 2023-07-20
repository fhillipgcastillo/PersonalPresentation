import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { PostResponse, getAllPosts } from '../lib/posts';
import Link from 'next/link';
import { ReactElement, ReactNode, useEffect } from 'react';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { useQuery, gql, useApolloClient } from '@apollo/client';
interface Props {
  posts: PostResponse[];
}

export default function Home(): ReactNode {
  const { data, loading, error } = useQuery(gql`
  query getPosts {
    posts {
      data {
        id
        title
        body
      }
    }
   }
  `);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {loading && <li>Loading...</li>}
          {error && <li><p><label>{error.name}:</label>{error.message}</p></li>}
          {!loading && !error && data && data.posts.data.map(({ id, title }) => (
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

// export const getStaticProps: GetStaticProps = async ({ preview, params }): Promise<GetStaticPropsResult<Props>> => {
//   const posts: PostResponse[] = await getAllPosts();
//   // const apolloClient = await useApolloClient();
//   // console.log("apolloclient", apolloClient);
//   console.log({ preview, params })
//   return {
//     props: {
//       posts
//     }
//   }
// }

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