import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { getBlogBySlug } from '../actions';
import { Row, Col } from 'reactstrap';



const BlogDetail = props => {
    const { blog } = props;
    return (
        <BaseLayout {...props.auth}>
            <BasePage className="blog-detail-page" >
                <Row>
                    <Col md={{ size: 8, offset: 0 }} >
                        <div dangerouslySetInnerHTML={{ __html: blog.story && '' }}>
                        </div>
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    );
};

BlogDetail.getInitialProps = async ({ query }) => {
    let blog = {};
    const slug = query.slug;
    try {
        blog = await getBlogBySlug(slug);
    } catch (error) {
        console.error(error);
    }
    return { blog };
};

export default BlogDetail;