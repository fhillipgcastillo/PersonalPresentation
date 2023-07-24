import Link from "next/link";
import { PostResponse } from "../../lib/posts";
import utilStyles from '../../styles/utils.module.css';
import postsStyles from './PostPreviewItem.module.css';
import React from "react";
import LinkedButton from "../LinkedButton/LinkedButton";

const PostPreviewItem = ({ post }): React.ReactNode => {
    return (
        <div className={postsStyles.postPreviewContainer}>
            <label>{post?.user.name.toUpperCase()}</label>
            <h3 className={postsStyles.title}>{post.title}</h3>
            <LinkedButton href={`/posts/${post.id}`} style={{backgroundColor: ""}}>READ MORE</LinkedButton>
        </div>
    );
};

export default PostPreviewItem;
