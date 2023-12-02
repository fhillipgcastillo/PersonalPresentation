import Head from 'next/head';
import React from 'react';
import { Fab, Grid, Toolbar } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar, { PageNavItems } from './NavBar';
import { animateScroll as scroll } from "react-scroll";
export const SITE_NAME: string = 'Fhillip Castillo\'s Blog Demo';


export interface LayoutProps {
  children: React.ReactNode;
  siteTitle?: string;
  description?: string;
  pageNavItems?: PageNavItems[];
  home?: boolean;
  page?: number;
};


export default function Layout(
  { children, home, siteTitle, description, page, pageNavItems = [] }: LayoutProps
): React.ReactNode {
  const pages = [
    {
      title: "Posts",
      link: "/posts",
    }
  ];
  const navBarItems: PageNavItems[] = [
    ...pageNavItems,
    ...pages,
  ];
  console.log(pageNavItems && [...pageNavItems]);
  return (
    <Grid sx={(theme) => ({
      height: "100vh"
    })}>
      <CssBaseline />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={`${description?.length >= 155 ? description?.slice(0, 154) : description}`}
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={`${siteTitle} | ${SITE_NAME}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <NavBar
        pageNavItems={navBarItems}
      />
      <Grid>
        <Toolbar />
        {children}
      </Grid>

      <Fab
        variant="extended"
        color="primary"
        onClick={() => scroll.scrollToTop()}
        sx={{ position: "fixed", right: 16, bottom: 16, color: "#fff" }}
      >
        ↑
      </Fab>
    </Grid>
  );
}
