import React, { Component } from 'react';
import axios from 'axios';
class Portfolio extends Component {

    static async getInitialProps() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const posts = response.data;
        return { posts };
    }
    render() {
        const posts = this.props;
        console.log(posts);
        return (
            <div className="container">
                <h1>dfd</h1>
            </div>
        );
    }
}

export default Portfolio;