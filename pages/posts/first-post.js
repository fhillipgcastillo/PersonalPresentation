import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'


const FirstPost = () => {
  return (
    <div>
      <Head>
        <title>First title</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <h1>First Post</h1>
      <h2><Link href={"/"}>Home</Link></h2>
    </div>
  )
}

export default FirstPost;
