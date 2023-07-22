import React, { useEffect, useState } from 'react'
import styles from './newpost.module.css';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Button from '../../../components/Button';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

const ADD_POST_MUTATION = gql`
mutation addPost($title: String!, $body: String!) {
  createPost(input: { title: $title, body: $body}) {
    title
    body
  }
}
`;

const NewPost = () => {
  const [postTitle, setPostTitle] = useState<string>("");
  const [postBody, setPostBody] = useState<string>("");
  // useMutation
  const [addPost, { data, loading, error, reset }] = useMutation(ADD_POST_MUTATION);
  const router = useRouter();

  useEffect(() => {
    if (data?.createPost) {
      console.log("postData", data?.createPost);
      setTimeout(() => {
        handleCancel();
      }, 3000);
    }
  }, [data])

  const handleSubmit = () => {
    console.log({ postTitle, postBody });
    addPost({
      variables: {
        title: postTitle,
        body: postBody,
      }
    })
  }

  const handleCancel = () => {
    router.back();
    reset();
  }
  return (
    <Layout>
      <Head>
        <title>New Post</title>
      </Head>
      <div className={styles.newpostContainer}>
        <h2>New Post</h2>
        {data &&
          <h3>Post created, redirecting...</h3>
          ||
          <>
            <div className={styles.formContainer}>
              <input
                className={styles.titleInput}
                type="text"
                placeholder="Title"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                disabled={loading}
              />
              <textarea
                className={styles.body}
                placeholder="Body"
                cols={10}
                rows={10}
                value={postBody}
                onChange={(e) => setPostBody(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className={styles.actionButtons}>
              <Button onClick={handleSubmit} disabled={loading}>{loading ? 'Loading...' : 'Submit'}</Button>
              <Button onClick={handleCancel} disabled={loading}>Cancel</Button>
            </div>
          </>
        }
      </div>
    </Layout>
  )
}

export default NewPost;
