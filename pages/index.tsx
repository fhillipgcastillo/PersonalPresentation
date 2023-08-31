import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { getPostsPaginated } from '../lib/posts';
import { ReactElement, ReactNode } from 'react';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { PostPreviewItem } from '../components/PostPreviewItem';
import { PostsPaginated } from '../lib/graphqlQuery';
import LinkedButton from '../components/LinkedButton/LinkedButton';


export interface HomeProps {
  postsData: PostsPaginated;
}

export default function Home({ postsData }: HomeProps): ReactElement {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
        <LinkedButton href="/posts/new" alt="New post" style={{ backgroundColor: "#0070f3", color: "white", padding: "10px 20px", alignSelf: "end" }} test-id="newpostbtn">New Post</LinkedButton>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list} test-id="posts-list">
          {postsData?.data && postsData.data.map((post) =>
            <li className={utilStyles.listItem} key={post.id} test-id={`post-preview-${post.id}`}>
              <PostPreviewItem post={post} key={post.id} />
            </li>
          )}
          {
            !postsData?.data && <p>Oops Something happend. Please try again.</p>
          }
        </ul>
        {postsData?.meta && postsData?.links && <div className='pagination' style={{ display: "flex", justifyContent: "space-evenly" }}>
          <LinkedButton href="" alt="First page"></LinkedButton>
          <LinkedButton href="" alt="Previous page"></LinkedButton>
          <label >Page 1 of {postsData?.meta.totalCount / 10}</label>
          <LinkedButton href={`/posts/page/${postsData?.links.next?.page || ''}`} alt="Nest page">{postsData?.links.next?.page && "Next →"}</LinkedButton>
          <LinkedButton href={`/posts/page/${postsData?.links.last?.page || ''}`} alt="Last page">{postsData?.links.last?.page && "Last"}</LinkedButton>
        </div>}
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async ({ preview, params }) => {

  const data: { posts: PostsPaginated } = await getPostsPaginated();
  return {
    props: {
      postsData: data.posts,
    }
  }
}

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