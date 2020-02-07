import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

const Blog = props => {
    console.log('inside blog', props.auth);
    return (
        <BaseLayout {...props.auth}>
            <BasePage>
                <h1>I'm Blog Page</h1>
            </BasePage>
        </BaseLayout>
    );
};
export default Blog;