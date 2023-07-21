import Link from "next/link";
import { PostResponse } from "../../lib/posts";
import utilStyles from '../../styles/utils.module.css';
import postsStyles from './PostPreviewItem.module.css';
import React from "react";

const PostPreviewItem = ({ post }): React.ReactNode => {
    return (
        <Link href={`/posts/${post.id}`}>
            <div className={postsStyles.postPreviewContainer}>
                <label>{post?.user.name.toUpperCase()}</label>
                <h3 className={postsStyles.title}>{post.title}</h3>
                <button className={postsStyles["read-more"]}><Link href={`/posts/${post.id}`}>READ MORE</Link></button>
            </div>
        </Link>
    );
};

export default PostPreviewItem;
