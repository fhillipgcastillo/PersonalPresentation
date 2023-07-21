import Date from '../../components/Date';
import Layout from '../../components/Layout';
import { API_URL, PostResponse, getAllPostIdsPaths, getFullPostData, getPostData } from '../../lib/posts';
import Head from 'next/head';

import utilStyles from '../../styles/utils.module.css';
import React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { fetcher } from '../../lib/utils';
import { getUserById } from '../../lib/users';
import postsStyles from '../../components/PostPreviewItem/PostPreviewItem.module.css';

export default function Post({ postData }): React.ReactElement {
    return <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                <label>By {postData?.user?.name}</label>
            </div>
            <p>
                {postData.body}
            </p>
        </article>
        <article>
            <h3>Comments:</h3>
            <ul>
                {postData?.comments?.data.map((comment) => (
                    <li key={comment.id} className={postsStyles.commentItem}>
                        <p className={postsStyles.commentUser}>{comment.email}</p>
                        <div style={{padding: "0 15px"}}>
                            <p>{comment.name}</p>
                            <p>{comment.body}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </article>
    </Layout>;
}

export const getStaticPaths: GetStaticPaths = async () => {
    // Return a list of possible value for id
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