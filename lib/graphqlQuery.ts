import { gql } from '@apollo/client';

export const GET_ALL_POSTS_QUERY = gql`
query getPosts {
  posts {
    data {
      id
      title
      body
      user {
        id
        name
      }
    }
  }
 }
`;


export interface PostsPaginated {
    data?: {
        id: number | string;
        title: string;
        body: string;
        user: {
            id: number;
            name: string;
        }
    }[];
    meta?: {
        totalCount: number;
    };
    links?: {
        first: {
            page: number;
            limit: number;
        };
        prev?: {
            page: number;
            limit: number;
        };
        next?: {
            page: number;
            limit: number;
        };
        last: {
            page: number;
            limit: number;
        }
    }
};

export const GET_POSTS_PAGINATED_QUERY = gql`
    query getPaginatedPosts($page: Int, $limit: Int){
        posts(options:{paginate:{ page: $page, limit: $limit }}) {
            data {
            id
            title
            body
            user {
                id
                name
            }
            }
            meta {
            totalCount
            }
            links {
            first {
                page
                limit
            }
            prev {
                page
                limit
            }
            next {
                page
                limit
            }
            last {
                page
                limit
            }
            }
        }
    }
`;


export const GET_POSTS_PAGINATED_PATHS_QUERY = gql`
query getPostsPaginated
{
    posts(options:{paginate:{ page:1, limit:10 }}) {
      meta {
        totalCount
      }
  
    }
  }
`;

export const GET_POST_IDS_QUERY = gql`
query getPostIds {
  posts {
      data {
          id
      }
  }
}
`;

export const GET_POST_BY_ID_QUERY = gql`
    query Post($postId: ID!) {
        post(id: $postId) {
            id
            title
            body
            user {
                id
                name
            }
        }
    }
`;

export const GET_POST_FULL_QUERY = gql`
    query getExtensivePost {
        post (id: 1) {
            id
            title
            body
            user {
                id
                name
                posts {
                    data {
                        id
                        title
                    }
                }
            }
            comments {
                data {
                    id
                    name
                    email
                    body
                }
            }
        }
    }
`;
