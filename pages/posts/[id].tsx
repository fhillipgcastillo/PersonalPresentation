import Date from '../../components/Date';
import Layout from '../../components/Layout';
import { PostResponse, getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';

import utilStyles from '../../styles/utils.module.css';
import React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

export default function Post({ postData }): React.ReactElement {
    return <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                <label>{postData.userId}</label>
            </div>
            <p>
                {postData.body}
            </p>
        </article>
    </Layout>;
}

export const getStaticPaths: GetStaticPaths = async () => {
    // Return a list of possible value for id
    const paths = await getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // Fetch necessary data for the blog post using params.id
    const postData: PostResponse = await getPostData(params?.id as string);
    console.log("postData", postData);
    return {
        props: {
            postData,
        }
    }
}