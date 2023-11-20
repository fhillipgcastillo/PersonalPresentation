import { Box, Stack, Avatar, Button, Typography } from '@mui/material'
import React from 'react'
import { Comment } from '../../lib/dataTypes';
import { capitalize } from '../../lib/utils';


export interface CommentProps {
    comment: Comment;
};

const CommentItem = ({ comment: { id, email, name, body } }: CommentProps) => (
    <Stack
        spacing={2}
        direction="row"
        p={3}
        borderRadius={1}
        sx={(theme) => ({
            backgroundColor: theme.palette.grey[100],
        })}
    >
        <Box sx={{ width: "100%" }}>
            <Stack
                spacing={2}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Stack spacing={2} direction="row" alignItems="center">
                    <Avatar src={"#"}></Avatar>
                    <Typography>{capitalize(name)}</Typography>
                </Stack>
                <Button>Reply</Button>
            </Stack>
            <Typography sx={{ color: "neutral.grayishBlue", p: "20px 0" }}>
                {capitalize(body)}
            </Typography>
        </Box>
    </Stack>
);

export default CommentItem;
