import { getPostPaginatedIdsPaths, getPostsPaginated } from '../../../lib/posts';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { PostsPaginated } from '../../../lib/dataTypes';
import Posts from '../../../components/Posts';


interface Props {
    postsData: PostsPaginated;
    page?: number;
}

export default Posts;

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
