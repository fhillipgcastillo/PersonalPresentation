import postsStyles from './PostPreviewItem.module.css';
import React from "react";
import { Button, Paper } from "@mui/material";

const PostPreviewItem = ({ post }): React.ReactNode => {
    return (
        <div className={postsStyles.postPreviewContainer}>
            <label>{post?.user.name.toUpperCase()}</label>
            <h3 className={postsStyles.title}>{post.title}</h3>
            <Button href={`/posts/${post.id}`} variant="contained">READ MORE</Button>
        </div>
    );
};

export default PostPreviewItem;
