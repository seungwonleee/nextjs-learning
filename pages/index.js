import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const index = () => {
  return (
    <Layout>
      <h1>category list</h1>
      <ul>
        <PostLink id='hello-next' title='Hello Next.js'/>
        <PostLink id='learn-next' title='Learn Next.js'/>
        <PostLink id='deploy-next' title='Deploy Next.js'/>
      </ul>
    </Layout>
  )
}

export default index
