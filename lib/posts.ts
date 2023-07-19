import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const API_URL = 'https://jsonplaceholder.typicode.com';
const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostResponse {
  userId: string;
  id: string;
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


export async function getAllPosts(): Promise<PostResponse[]> {
  const posts = await fetch(`${API_URL}/posts`)
    .then((res) => res.json())
    .then((data) => {
      return data as PostResponse[];
    });

  // Sort posts by date
  return posts;
}

/**
 * 
 * @returns Array({params: {id: string}});
 */
export function getAllPostIds(): PostParams[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
};


// export async function getPostData(id: string): Promise<PostResponse> {
  
// }
