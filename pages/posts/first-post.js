import React from 'react'
import Link from 'next/link'


const FirstPost = () => {
  return (
    <div>
      <h1>First Post</h1>
      <h2><Link href={"/"}>Home</Link></h2>
    </div>
  )
}

export default FirstPost;
