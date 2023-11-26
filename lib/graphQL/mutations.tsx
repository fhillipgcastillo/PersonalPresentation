import { gql } from '@apollo/client';

export const ADD_POST_MUTATION = gql`
mutation addPost($title: String!, $body: String!) {
  createPost(input: { title: $title, body: $body}) {
    title
    body
  }
}
`;
