import { client } from './apolloClient';
import { GET_ALL_POSTS_QUERY, GET_POSTS_PAGINATED_PATHS_QUERY, GET_POSTS_PAGINATED_QUERY, GET_POST_BY_ID_QUERY, GET_POST_FULL_QUERY, GET_POST_IDS_QUERY } from './graphqlQueries';

export interface PostResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostParams = {
  params: {
    id: string;
  }
};

// export interface PostHtmlData extends PostData {
//   contentHtml: string;
// };

export const getAllPosts = async () => {
  const { data } = await client.query({ query: GET_ALL_POSTS_QUERY });
  return data.posts.data;
};

export const getPostsPaginated = async (page: number = 1, limit: number = 9) => {
  const { data } = await client.query(
    {
      query: GET_POSTS_PAGINATED_QUERY,
      variables: { page, limit }
    }
  );

  return data;
};

/**
 * 
 * @returns Array({params: {id: string}});
 */
export async function getAllPostIdsPaths(): Promise<PostParams[]> {
  const { data } = await client.query({ query: GET_POST_IDS_QUERY });

  return data.posts.data.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });
};

export async function getPostPaginatedIdsPaths(): Promise<{ totalCount: number; }> {
  const { data } = await client.query({
    query: GET_POSTS_PAGINATED_PATHS_QUERY,
    variables: {
      page: 1,
      limit: 10,
    }
  });
  return data.posts.meta
};

export async function getPostData(id: number)/*: Promise<PostHtmlData>: Promise<PostResponse>*/ {
  const { data } = await client.query({ query: GET_POST_BY_ID_QUERY, variables: { postId: id } });

  return data.post;
}


export async function getFullPostData(id: number)/*: Promise<PostHtmlData>: Promise<PostResponse>*/ {
  const { data } = await client.query({ query: GET_POST_FULL_QUERY, variables: { postId: id } });

  return data.post;
}
