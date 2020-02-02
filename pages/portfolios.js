import React, { Component } from 'react';
import axios from 'axios';
import BaseLayout from '../components/layouts/BaseLayout';
import { useRouter } from 'next/router';
import Link from 'next/link';
// import { Link } from '../routes';

class PortFolios extends Component {

    static async getInitialProps() {
        let posts = [];
        try {
            let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            posts = response.data;

        } catch (error) {

        }
        return { posts: posts.splice(0, 10) };
    }

    renderPosts(posts) {
        return posts.map(post => {
            return (
                <li key={post.id}>
                    <Link href="/portfolio/[id]" as={`/portfolio/${post.id}`}>
                        {<a style={{ 'fontSize': '20px' }}> {post.title} </a>}
                    </Link>
                </li >
            );
        });
    }

    render() {
        const { posts } = this.props;

        return (
            <BaseLayout>
                <h1> I am Portfolios Page </h1>
                <ul>
                    {this.renderPosts(posts)}
                </ul>
            </BaseLayout>
        );
    }
}

export default PortFolios;;