import { Box, Stack, Avatar, Button, Typography, Grid } from '@mui/material'
import React from 'react'
import { Comment } from '../../lib/dataTypes';
import { capitalize } from '../../lib/utils';


export interface CommentProps {
    comment: Comment
};

const CommentItem = (props: CommentProps) => {
    const { comment: { id, email, name, body } } = props;
    return (
        <Grid container sx={{ p: "15px" }}>
            <Stack spacing={2} direction="row">
                <Box sx={{ width: "100%" }}>
                    <Stack
                        spacing={2}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Stack spacing={2} direction="row" alignItems="center">
                            <Avatar src={"..."}></Avatar>
                            <Typography>{capitalize(name)}</Typography>
                        </Stack>
                        <Button>Reply</Button>
                    </Stack>
                    <Typography sx={{ color: "neutral.grayishBlue", p: "20px 0" }}>
                        {capitalize(body)}
                    </Typography>
                </Box>
            </Stack>
        </Grid>
    )
};

export default CommentItem;
