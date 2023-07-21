import {gql} from '@apollo/client';

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
