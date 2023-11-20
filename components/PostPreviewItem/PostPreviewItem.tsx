import React from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { PostData } from '../../lib/dataTypes';
import { capitalize } from "../../lib/utils";


const PostPreviewItem = ({ post }: { post: PostData }): React.ReactNode => {
    const postTitle = capitalize(post.title);
    const postBody = capitalize(post.body);

    return (
        <Card
            sx={{
                height: '100%', display: 'flex', flexDirection: 'column', //whiteSpace: "nowrap",
                boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
                "&:hover": {
                    boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)",
                }
            }}

        >
            <CardMedia
                component="div"
                sx={{
                    // 16:9
                    pt: '56.25%',
                }}
                image="https://source.unsplash.com/random?wallpapers"
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2" noWrap>
                    {postTitle.length > 30 ? `${postTitle.slice(0, 27)}...` : postTitle}
                </Typography>
                <Typography>
                    {postBody.length > 80 ? `${postBody.slice(0, 77)}...` : postBody}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
                <Button href={`/posts/${post.id}`} variant="contained">READ MORE</Button>
            </CardActions>
        </Card>
    );
};

export default PostPreviewItem;
