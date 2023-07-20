import Date from '../../components/Date';
import Layout from '../../components/Layout';
import { API_URL, PostResponse, getAllPostIdsPaths, getPostData } from '../../lib/posts';
import Head from 'next/head';

import utilStyles from '../../styles/utils.module.css';
import React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { fetcher } from '../../lib/utils';
import { getUserById } from '../../lib/users';

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
    const postData = await getPostData(Number(params?.id));
    
    return {
        props: {
            postData
        }
    }
}