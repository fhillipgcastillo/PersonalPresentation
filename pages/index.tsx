import { getPostsPaginated } from '../lib/posts';
import { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import { PostsPaginated } from '../lib/dataTypes';
import HomeLayout, { HomeLayoutProps } from '../components/HomeLayout';
import Layout from '../components/Layout';
import { Grid, Toolbar, Typography } from '@mui/material';

const Home = () => {
  return (
    <Layout home siteTitle='Fhillip Castillo'>
      <Toolbar />
      <Grid container flexDirection={"column"} justifyContent={"center"}>
        <Grid item lg={6} alignSelf={"center"} >
          <Typography variant='h2'>Hi!, I'm </Typography><Typography variant="h1">Fhillip Castillo</Typography>
          <Typography variant='h2'>Front-End Web Developer.</Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}
export default Home;

// export const getStaticProps: GetStaticProps<HomeLayoutProps> = async ({ preview, params }) => {

//   const data: { posts: PostsPaginated } = await getPostsPaginated();
//   return {
//     props: {
//       postsData: data.posts,
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