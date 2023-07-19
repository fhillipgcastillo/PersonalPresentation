import Date from '../../components/Date';
import Layout from '../../components/Layout';
import { PostHtmlData, getAllPostIds, getPostData } from '../../lib/posts';
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
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    </Layout>;
}

export const getStaticPaths:GetStaticPaths = async () => {
    // Return a list of possible value for id
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // Fetch necessary data for the blog post using params.id
    const postData: PostHtmlData = await getPostData(params?.id as string);

    return {
        props: {
            postData,
        }
    }
}