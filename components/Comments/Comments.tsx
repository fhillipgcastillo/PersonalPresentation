import { Stack } from '@mui/material'
import React from 'react'
import { Comment as CommentType } from '../../lib/dataTypes'
import CommentItem from './Comment'

interface CommentsProps {
    comments?: {
        data: CommentType[]
    }
};

export const Comments = ({ comments }: CommentsProps) => (
    <Stack spacing={3}>
        {comments?.data.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
        ))}
    </Stack>
);
