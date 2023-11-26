import React, { useEffect, useState } from "react"
import Layout from "../../../components/Layout";
import Head from "next/head";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ADD_POST_MUTATION } from "../../../lib/graphQL/mutations";

const NewPost = () => {
  const [postTitle, setPostTitle] = useState<string>("");
  const [postBody, setPostBody] = useState<string>("");
  // useMutation
  const [addPost, { data, loading, error, reset }] = useMutation(ADD_POST_MUTATION);
  const router = useRouter();

  useEffect(() => {
    if (data?.createPost) {
      setTimeout(() => {
        handleCancel();
      }, 3000);
    }
  }, [data])

  const handleSubmit = () => {
    if (postTitle && postBody) {
      addPost({
        variables: {
          title: postTitle,
          body: postBody,
        }
      });
    }
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
      <Grid container flexDirection="column" alignItems="center">
        <Grid container item flexDirection="column" lg={8}>
          <Typography variant="h1" sx={{ fontSize: "2.6rem" }}>Create a new post</Typography>
          {data &&
            <Typography variant="h3">Post created, redirecting...</Typography>
            ||
            <Grid container item flexDirection="column" spacing={2}>
              <Grid item container flexDirection="column" >
                <TextField
                  variant="outlined"
                  label="Post Title"
                  type="text"
                  onChange={(e) => setPostTitle(e.target.value)}
                  value={postTitle}
                  required
                  fullWidth
                  margin="normal"
                />
                <TextField
                  multiline
                  variant="outlined"
                  rows={10}
                  placeholder="Body"
                  value={postBody}
                  onChange={(e) => setPostBody(e.target.value)}
                  disabled={loading}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item sx={{ "& button": { m: 1, } }}>
                <Button variant="contained" onClick={handleSubmit} disabled={loading}>{loading ? "Loading..." : "Submit"}</Button>
                <Button variant="contained" color="error" onClick={handleCancel} disabled={loading}>Cancel</Button>
              </Grid>
            </Grid>
          }
        </Grid>
      </Grid>
    </Layout>
  )
}

export default NewPost;
