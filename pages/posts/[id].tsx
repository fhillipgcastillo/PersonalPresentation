import Layout from '../../components/Layout';
import { getAllPostIdsPaths, getFullPostData } from '../../lib/posts';
import Head from 'next/head';

import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PostData } from '../../lib/dataTypes';
import { CardMedia, Divider, Grid, Typography } from '@mui/material';
import { capitalize } from '../../lib/utils';
import Comments from '../../components/Comments';

export interface PostProps {
    postData: PostData
};

export default function Post({ postData }): React.ReactElement {
    return (
        <Layout siteTitle={postData.title} description={postData.body}>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <Grid spacing={4}>
                <Typography
                    variant='h1'
                    sx={{
                        fontSize: "2.9rem",
                        fontWeight: 800,
                        fontHeight: 1.3,
                        letterSpacing: "-0.05rem",
                        margin: "1rem 0",
                    }}
                >
                    {capitalize(postData.title)}
                </Typography>
                <Typography variant="overline" gutterBottom>
                    By {capitalize(postData?.user?.name)}
                </Typography>
                <CardMedia
                    component="div"
                    sx={{
                        // 16:9
                        pt: '30%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                />
                <Typography variant='body1' sx={{ fontSize: "1.2rem", marginTop: "1rem" }}>
                    {capitalize(postData.body)}
                </Typography>
            </Grid>

            <Grid sx={{ marginTop: 5 }}>
                <Divider variant="middle" />
                <Comments comments={postData?.comments} />
            </Grid>
        </Layout >
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllPostIdsPaths();

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
    const postData = await getFullPostData(Number(params?.id));

    return {
        props: {
            postData
        }
    }
}