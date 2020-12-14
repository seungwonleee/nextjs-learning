import React from 'react';
import Layout from '../components/Layout';

const Content = (props) => {
   
}

const post = (props) => {
    return (
        <Layout>
            <div>
                <h1>{props.url.query.title}</h1>
                <p>This is category contetent.</p>
            </div>
        </Layout>
    )
}

export default post
