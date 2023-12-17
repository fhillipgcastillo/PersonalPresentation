import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import React from 'react';
import { Container, CssBaseline, Grid, Typography } from '@mui/material';

export const SITE_NAME: string = 'Fhillip Castillo\'s Blog Demo';

export interface LayoutProps {
  children: React.ReactNode;
  siteTitle?: string;
  description?: string;
  home?: boolean;
  page?: number;
};

export default function Layout(
  { children, home, siteTitle, description, page }: LayoutProps
): React.ReactNode {
  return (
    <Grid sx={(theme) => ({
      height: "100vh"
      // backgroundColor: home ? theme.palette.secondary.dark : theme.palette.primary.main,
      // color: home ? theme.palette.secondary.main : theme.palette.text.primary,
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
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <Typography variant='h1' sx={{
              fontSize: "3.6rem",
              lineHeight: 1.2,
              fontWeight: 800,
              letterSpacing: "-0.05rem",
              margin: "1rem 0",
            }}>{SITE_NAME}</Typography>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <Typography variant="h2" sx={{
              fontSize: "1.5rem",
              lineHeight: 1.2,
              fontWeight: 800,
              letterSpacing: "-0.05rem",
              margin: "1rem 0",
            }}>
              <Link href="/" className={utilStyles.colorInherit}>
                {SITE_NAME}
              </Link>
            </Typography>
          </>
        )}
      </header>
      <Container maxWidth="lg">
        {children}
      </Container>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </Grid>
  );
}
