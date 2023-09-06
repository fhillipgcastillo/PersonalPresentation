import Head from 'next/head';
import Layout, { siteTitle } from '../../../components/Layout';
import utilStyles from '../../../styles/utils.module.css';
import { getPostPaginatedIdsPaths, getPostsPaginated } from '../../../lib/posts';
import { ReactNode } from 'react';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { PostPreviewItem } from '../../../components/PostPreviewItem';
import { PostsPaginated } from '../../../lib/graphqlQuery';
import { Button, Grid, Pagination, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import PageContent from '../../../components/PageContent';


interface Props {
    postsData: PostsPaginated;
    page?: number;
}

export default function PostsPage({ postsData, page }: Props): ReactNode {
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
                <Button href="/posts/new" style={{ backgroundColor: "#0070f3", color: "white", padding: "10px 20px", alignSelf: "end" }}>New Post</Button>
            </section>
            <PageContent postsData={postsData} />
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ preview, params }): Promise<GetStaticPropsResult<Props>> => {
    const page = params?.page ? Number(params?.page) : 1;
    const data: { posts: PostsPaginated } = await getPostsPaginated(page);

    return {
        props: {
            postsData: data.posts,
            page: Number(page),
        }
    }
}

export const getStaticPaths = async () => {
    let paths = [];
    const meta = await getPostPaginatedIdsPaths();

    for (let i = 1; i <= meta?.totalCount / 10; i++) {
        paths.push({
            params: {
                page: i.toString()
            }
        })
    }

    return {
        paths,
        fallback: false
    }
}
