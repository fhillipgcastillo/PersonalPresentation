
import React from 'react'
import { Alert, Box, Grid, Pagination, Stack } from '@mui/material'
import { PostPreviewItem } from './PostPreviewItem'
import { useRouter } from 'next/router';

function PageContent({ postsData }) {
    const router = useRouter();

    const changePage = (event: React.ChangeEvent, page: number) => {
        router.push(`/posts/page/${page}`);
    };
    if (!postsData?.data) {
        return (
            <Box>
                <Alert severity="info">This is an info alert — check it out!</Alert>
            </Box>
        )
    }
    return (
        <Box>
            <Grid container spacing={3} data-testid="page-posts">
                {postsData?.data.map((post) =>
                    <Grid container item xs={12} md={4} key={post.id}>
                        <PostPreviewItem post={post} key={post.id} />
                    </Grid>
                )}
            </Grid>
            <Stack spacing={2} alignItems="center" mb={2} mt={4}>
                <Pagination
                    count={postsData?.meta.totalCount}
                    onChange={changePage}
                    showFirstButton
                    showLastButton
                />
            </Stack>
        </Box>
    )
}

export default PageContent