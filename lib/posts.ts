import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { fetcher } from './utils';

const API_URL = 'https://jsonplaceholder.typicode.com';
const postsDirectory = path.join(process.cwd(), 'posts');

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


export const getAllPosts = async (): Promise<PostResponse[]> => (
  await fetcher(`${API_URL}/posts`)
);

/**
 * 
 * @returns Array({params: {id: string}});
 */
export async function getAllPostIds(): Promise<PostParams[]> {
  const posts = await getAllPosts();

  return posts.map((p) => {
    return {
      params: {
        id: `${p.id}`,
      },
    };
  });
};


export async function getPostData(id: string): Promise<PostResponse> {
  return await fetcher(`${API_URL}/posts/${id}`);
}
