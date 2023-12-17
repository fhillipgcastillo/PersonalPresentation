import React, { useRef } from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, GridProps, Grow, Typography } from "@mui/material";
import { PostData } from '../../lib/dataTypes';
import { capitalize } from "../../lib/utils";
import { useObserver } from "../useObserver";


interface PreviewItemsProps extends GridProps {
    post: PostData
}

const PostPreviewItem = (props: PreviewItemsProps): React.ReactNode => {
    const { post, ...rest } = props;
    const [visible, componentRef] = useObserver();

    const postTitle = capitalize(post.title);
    const postBody = capitalize(post.body);

    return (
        <Grid ref={componentRef} {...rest}>
            <Grow in={visible} timeout={600}>
                <Card
                    sx={(theme) => ({
                        height: '100%', display: 'flex', flexDirection: 'column',
                        boxShadow: theme.shadows[3],
                        "&:hover": {
                            boxShadow: theme.shadows[5]
                        }
                    })}

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
            </Grow>
        </Grid>
    );
};

export default PostPreviewItem;
