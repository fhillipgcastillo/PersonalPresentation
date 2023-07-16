import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const FirstPost = () => {
  return (
    <div>
      <Head>
        <title>First title</title>
      </Head>
      <h1>First Post</h1>
      <h2><Link href={"/"}>Home</Link></h2>
    </div>
  )
}

export default FirstPost;
