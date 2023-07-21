import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { fetcher } from './utils';
import { client } from './apolloClient';
import { gql } from '@apollo/client';
import { GET_ALL_POSTS_QUERY, GET_POSTS_PAGINATED_QUERY, GET_POST_BY_ID_QUERY, GET_POST_FULL_QUERY, GET_POST_IDS_QUERY } from './graphqlQuery';

export const API_URL = 'https://jsonplaceholder.typicode.com';

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

export const getPostsPaginated = async (page: number = 1, limit: number = 10) => {
  const { data } = await client.query(
    { query: GET_POSTS_PAGINATED_QUERY ,
      variables: { paginate: { page, limit } }
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


export async function getPostData(id: number)/*: Promise<PostHtmlData>: Promise<PostResponse>*/ {
  const { data } = await client.query({ query: GET_POST_BY_ID_QUERY, variables: { postId: id } });

  return data.post;
}


export async function getFullPostData(id: number)/*: Promise<PostHtmlData>: Promise<PostResponse>*/ {
  const { data } = await client.query({ query: GET_POST_FULL_QUERY, variables: { postId: id } });

  return data.post;
}
