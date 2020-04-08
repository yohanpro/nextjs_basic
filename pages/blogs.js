import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Container, Row, Col } from 'reactstrap';
import { getBlogs } from '../actions';
import { Link } from '../routes';
import { shortenText } from '../helpers/utils';
import moment from 'moment';



const renderBlogs = blogs => {
    return (
        blogs.map((blog, idx) => {
            return (
                <div key={idx} className="post-preview">
                    <Link route={`/blogs/${blog.slug}`}>
                        <a>
                            <h2 className="post-title">
                                {shortenText(blog.title, 40)}
                            </h2>
                            <h3 className="post-subtitle">
                                {shortenText(blog.subTitle, 124)}
                            </h3>
                        </a>
                    </Link>
                    <p className="post-meta">Posted by
                        <a href="#">  {blog.author} </a>
                        {moment(parseInt(blog.createdAt, 10)).format('LL')}</p>
                </div>
            );
        })

    );
};
const Blogs = props => {
    const { blogs } = props;

    console.log('bllg :', props);
    return (
        <BaseLayout {...props.auth} title="Yohan Kim - My Blogs " headerType={'landing'} className="blog-listing-page">
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
                    <Col md="10" lg="8" className="mx-auto">
                        {
                            <React.Fragment>
                                {renderBlogs(blogs)}
                            </React.Fragment>
                        }
                        <div className="clearfix">
                            <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                        </div>
                    </Col>
                </Row>

                <footer>
                    <Container>
                        <Row>
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <ul className="list-inline text-center">
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <span className="fa-stack fa-lg">
                                                <i className="fas fa-circle fa-stack-2x"></i>
                                                <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <span className="fa-stack fa-lg">
                                                <i className="fas fa-circle fa-stack-2x"></i>
                                                <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <span className="fa-stack fa-lg">
                                                <i className="fas fa-circle fa-stack-2x"></i>
                                                <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                                <p className="copyright text-muted">Copyright &copy; Yohan Kim 2018</p>
                            </div>
                        </Row>
                    </Container>
                </footer>
            </BasePage>
        </BaseLayout>
    );
};

Blogs.getInitialProps = async ({ req }) => {
    let blogs = [];
    try {
        blogs = await getBlogs();
    } catch (error) {
        console.error(error);
    }
    return { blogs };
};


export default Blogs;