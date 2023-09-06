import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { getPostsPaginated } from '../lib/posts';
import { ReactNode } from 'react';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { PostPreviewItem } from '../components/PostPreviewItem';
import { PostsPaginated } from '../lib/graphqlQuery';
import { Box, Button, Grid, List, ListItem, Pagination, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import PageContent from '../components/PageContent';


interface Props {
  postsData: PostsPaginated;
}



export default function Home({ postsData }: Props): ReactNode {
  const router = useRouter();

  const changePage = (event: React.ChangeEvent, page: number) => {
    router.push(`/posts/page/${page}`);
  };
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
        <Button href="/posts/new" variant='contained'>New Post</Button>
      </section>
      <PageContent postsData={postsData} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview, params }): Promise<GetStaticPropsResult<Props>> => {

  const data: { posts: PostsPaginated } = await getPostsPaginated();
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