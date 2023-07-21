import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { PostResponse, getAllPosts, getPostsPaginated } from '../lib/posts';
import { ReactNode } from 'react';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { PostPreviewItem } from '../components/PostPreviewItem';
import { PostsPaginated } from '../lib/graphqlQuery';


interface Props {
  postsData: PostsPaginated;
}



export default function Home({ postsData }: Props): ReactNode {
  console.log(postsData);
  // return <>loadging</>
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {postsData.data.map((post) =>
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
  // const {page, limit} = params;
  // console.log('params', params);
  const data: { posts: PostsPaginated} = await getPostsPaginated();
  return {
    props: {
      postsData: data.posts,
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