import React from 'react'
import Layout from './Layout'
import { Button, Grid, Typography } from '@mui/material'
import PostPreview from './PostPreview'
import { PostsPaginated } from '../lib/dataTypes'

export interface HomeLayoutProps {
    postsData: PostsPaginated;
    page?: number;
    siteTitle?: string;
}

const HomeLayout = (props: HomeLayoutProps) => {
    const { postsData, page, siteTitle } = props;

    return (
        <Layout home siteTitle={siteTitle} page={page} >
            <Grid container flexDirection="column" sx={{ padding: "10px" }}>
                <Typography variant='h1' sx={{ fontSize: "2.6rem" }}>Recent Articles</Typography>
                <Grid item container sx={{ flexGrow: 1 }}>
                    <Grid item xs={8}>
                        <Typography>Discover the latest news, tips and user research insights from Acme.</Typography>
                        <Typography>You will learn about web infrastructure, design systems and devops APIs best practices.</Typography>
                    </Grid>
                    <Grid item container xs={4} sx={{
                        flexGrow: 1,
                        justifyContent: "flex-end",
                        alignItems: "center"
                    }}>
                        <Button href="/posts/new" variant='contained'>New Post</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container flexDirection="column" sx={{ padding: "10px" }}>
                <PostPreview postsData={postsData} />
            </Grid>
        </Layout>
    )
}

export default HomeLayout