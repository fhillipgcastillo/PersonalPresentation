import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { PostResponse, getAllPosts } from '../lib/posts';
import { ReactNode } from 'react';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { PostPreviewItem } from '../components/PostPreviewItem';


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
        <ul className={utilStyles.list}>
          {posts.map((post) =>
          <li className={utilStyles.listItem} key={post.id} >
            <PostPreviewItem post={post} key={post.id}/>
          </li>
          )}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview, params }): Promise<GetStaticPropsResult<Props>> => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
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