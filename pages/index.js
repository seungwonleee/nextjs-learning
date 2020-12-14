import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const index = () => {
  return (
    <Layout>
      <h1>category list</h1>
      <ul>
        <PostLink title='Hello Next.js'/>
        <PostLink title='Learn Next.js'/>
        <PostLink title='Deploy Next.js'/>
      </ul>
    </Layout>
  )
}

export default index
