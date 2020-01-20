import React from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';

class Portfolio extends React.Component {
    static async getInitialProps(context) {
        let post = {};
        const postId = context.query.id;
        try {
            let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            post = response.data;
        } catch (error) {

        }
        return { post };
    }

    render() {
        const { post } = this.props;
        console.log(this.props);
        return (
            <BaseLayout>

                <h1>{post.title}</h1>
                <h1>{this.props.router.query.id}</h1>
            </BaseLayout>
        );
    }
}

export default withRouter(Portfolio);
