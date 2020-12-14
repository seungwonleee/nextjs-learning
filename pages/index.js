import React from 'react';
import Link from 'next/link';

const index = () => {
  return (
    <div>
      <Link href='/'><a style={{fontSize:'1.5rem', margin:'1rem'}}>Home</a></Link>
      <Link href='/about'><a style={{fontSize:'1.5rem', margin:'1rem'}}>About</a></Link>
      <p>hello next.js</p>
    </div>
  )
}

export default index
