import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import { Container, Row, Col } from 'reactstrap';
import { getUserBlogs } from '../actions';



const UserBlogs = (props) => {
    const { blogs } = props;
    console.log(blogs);
    return (
        <BaseLayout {...props.auth} headerType={'landing'} className="blog-listing-page">
            <div className="masthead" style={{ "backgroundImage": "url('/static/images/home-bg.jpg')" }}>
                <div className="overlay"></div>
                <Container>
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>Fresh Blogs</h1>
                                <span className="subheading">Programming, travelling...</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <BasePage className="blog-body">
                <Row>
                    <Col md="6" className="mx-auto text-center">
                        Published Blgos
                    </Col>
                    <Col md="6" className="mx-auto text-center">
                        Draft
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    );
};
UserBlogs.getInitialProps = async ({ req }) => {
    let blogs = [];
    try {
        blogs = await getUserBlogs(req);
    } catch (error) {
        console.error(error);
    }
    return { blogs };
};


export default withAuth('siteOwner')(UserBlogs);