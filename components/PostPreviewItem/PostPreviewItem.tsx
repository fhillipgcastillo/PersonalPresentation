import React from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { PostData } from '../../lib/graphqlQuery';


const PostPreviewItem = ({ post }: { post: PostData }): React.ReactNode => {
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
                    {post.title.length > 30 ? `${post.title.slice(0, 27)}...` : post.title}
                </Typography>
                <Typography>
                    {post.body.length > 80 ? `${post.body.slice(0, 77)}...` : post.body}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
                <Button href={`/posts/${post.id}`} variant="contained">READ MORE</Button>
            </CardActions>
        </Card>
    );
};

export default PostPreviewItem;
