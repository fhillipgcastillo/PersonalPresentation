import { Container, CssBaseline, Grid, Paper, styled } from '@mui/material'
import React from 'react'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const GridTest = () => {
    return (
        <Grid
            container
            spacing={2}
            mt={0}

            sx={(theme) => ({ height: "100vh", /*bgcolor: "Red"theme.palette.primary.main*/ })}
        >
            <CssBaseline />
            {/* <Grid sx={(theme) => ({ bgcolor: theme.palette.primary.dark })}> */}
            <Grid
                item
                container
                md={6}
                lg={6}
                border={"1px solid black"}
                justifyContent={"center"} // contenter horizontally centered
                alignItems={"center"} // aligh vertically centered
                flexWrap={"nowrap"}
                sx={(theme) => ({
                    bgcolor: theme.palette.primary.dark
                })}>
                <Grid item md={8} lg={8} height={"60vh"} sx={(theme) => ({ bgcolor: theme.palette.error.main })}></Grid>
                {/* <Grid item md={3} lg={3} sx={(theme) => ({ bgcolor: theme.palette.warning.main })}></Grid>
                <Grid item md={3} lg={3} sx={(theme) => ({ bgcolor: theme.palette.info.main })}></Grid>
                <Grid item md={3} lg={3} sx={(theme) => ({ bgcolor: theme.palette.success.main })}></Grid> */}
            </Grid>
            <Grid
                item
                container
                md={6}
                lg={6}
                border={"1px solid black"}
                flexDirection={"column"}
                flexWrap={"nowrap"}
                alignItems={""}
                sx={(theme) => ({
                    bgcolor: theme.palette.primary.dark
                })}
            >
                <Grid container item md={12}>
                    <Grid item md={3} lg={3} sx={(theme) => ({ bgcolor: theme.palette.error.main })}></Grid>
                    <Grid item md={3} lg={3} sx={(theme) => ({ bgcolor: theme.palette.warning.main })}></Grid>
                    <Grid item md={3} lg={3} sx={(theme) => ({ bgcolor: theme.palette.info.main })}></Grid>
                    <Grid item md={3} lg={3} sx={(theme) => ({ bgcolor: theme.palette.success.main })}></Grid>
                    {/* The extra */}
                    <Grid item md={12} lg={12} sx={(theme) => ({ bgcolor: theme.palette.secondary.main })}></Grid>
                </Grid>
                <Grid container item md={12}>
                    <Grid item md={12} lg={12} sx={(theme) => ({ bgcolor: theme.palette.error.main })}></Grid>
                    <Grid item md={12} lg={12} sx={(theme) => ({ bgcolor: theme.palette.warning.main })}></Grid>
                    <Grid item md={12} lg={12} sx={(theme) => ({ bgcolor: theme.palette.info.main })}></Grid>
                    <Grid item md={12} lg={12} sx={(theme) => ({ bgcolor: theme.palette.success.main })}></Grid>
                    {/* The extra */}
                    {/* <Grid item md={12} lg={12} sx={(theme) => ({ bgcolor: theme.palette.secondary.main })}></Grid> */}
                </Grid>
            </Grid>
            {/* </Grid> */}
        </Grid>
    )
}

export default GridTest