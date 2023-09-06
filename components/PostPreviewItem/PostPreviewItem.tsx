import React from "react";
import { Button, Card, CardActions, CardContent, CardHeader, Grid, Paper, Typography } from "@mui/material";
import { PostData } from '../../lib/graphqlQuery';
// box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);

const PostPreviewItem = ({ post }: { post: PostData }): React.ReactNode => {
    return (
        <Card sx={{
            // height: "30vh",
            whiteSpace: "nowrap",
            boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
            "&:hover": {
                boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)",
            }
        }}>
            <CardHeader
       
                title={<Typography variant="h5" noWrap>{post.title.length > 30 ? `${post.title.slice(0, 27)}...`: post.title}</Typography>}
                subheader={post?.user.name.toUpperCase()}
                
            />
            <CardContent >
                <Typography variant="body2" color="text.secondary" noWrap>
                    {post.body}
                </Typography>
            </CardContent>
            <CardActions>
                <Grid justifyContent={"center"}>
                    <Button href={`/posts/${post.id}`} variant="contained">READ MORE</Button>
                </Grid>
            </CardActions>
        </Card>
    );
};

export default PostPreviewItem;
