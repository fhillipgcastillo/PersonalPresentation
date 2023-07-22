import Head from 'next/head';
import Layout, { siteTitle } from '../../../components/Layout';
import utilStyles from '../../../styles/utils.module.css';
import { getPostPaginatedIdsPaths, getPostsPaginated } from '../../../lib/posts';
import { ReactNode } from 'react';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { PostPreviewItem } from '../../../components/PostPreviewItem';
import { PostsPaginated } from '../../../lib/graphqlQuery';
import LinkedButton from '../../../components/LinkedButton/LinkedButton';


interface Props {
    postsData: PostsPaginated;
    page?: number;
}

export default function PostsPage({ postsData, page }: Props): ReactNode {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
                <LinkedButton href="/posts/new" alt="New post" style={{ backgroundColor: "#0070f3", color: "white", padding: "10px 20px", alignSelf: "end" }}>New Post</LinkedButton>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <ul className={utilStyles.list}>
                    {postsData?.data.map((post) =>
                        <li className={utilStyles.listItem} key={post.id} >
                            <PostPreviewItem post={post} key={post.id} />
                        </li>
                    )}
                </ul>
                <div className='pagination' style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <LinkedButton href={`/posts/page/${postsData?.links.first?.page || ''}`} alt="First page">{postsData?.links.first?.page && 'First'}</LinkedButton>
                    <LinkedButton href={`/posts/page/${postsData?.links.prev?.page || ''}`} alt="Previous page">{postsData?.links.prev?.page && "← Prev"}</LinkedButton>
                    <label >Page  {page} of {postsData?.meta.totalCount / 10}</label>
                    <LinkedButton href={`/posts/page/${postsData?.links.next?.page || ''}`} alt="Nest page">{postsData?.links.next?.page && "Next →"}</LinkedButton>
                    <LinkedButton href={`/posts/page/${postsData?.links.last?.page || ''}`} alt="Last page">{postsData?.links.last?.page && "Last"}</LinkedButton>
                </div>
            </section>
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
