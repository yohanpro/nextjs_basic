import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import { Container, Row, Col, Button } from 'reactstrap';
import { getUserBlogs, updateBlog, deleteBlogById } from '../actions';
import { Link, Router } from '../routes';
import PortButtonDropDown from '../components/ButtonDropdown';


const seperateBlogs = blogs => {
    const published = [];
    const drafts = [];
    blogs.forEach(blog => blog.status === 'draft' ? drafts.push(blog) : published.push(blog));

    return { published, drafts };
};

const renderBlogs = blogs => {
    return (
        <ul className="user-blogs-list">
            {
                blogs.map((blog, index) => {
                    return (
                        <li key={index}>
                            <Link route={`/blogs/${blog._id}/edit`}>
                                <a>{blog.title}</a>
                            </Link>
                            <PortButtonDropDown items={dropdownOptions(blog)} />
                        </li>
                    );
                })
            }
        </ul>
    );
};

const dropdownOptions = blog => {
    const status = createStatus(blog.status);
    return [
        { text: status.view, handlers: { onClick: () => changeBlogStatus(status.value, blog._id) } },
        { text: 'Delete', handlers: { onClick: () => deleteBlogWarning(blog._id) } }
    ];
};

const createStatus = status => {
    return status === 'draft' ? { view: 'Publish Story', value: 'published' }
        : { view: 'Make a Draft', value: 'draft' };
};

const changeBlogStatus = (status, blogId) => {
    updateBlog({ status }, blogId).then(() => {
        Router.pushRoute('/userBlogs');
    }).catch(err => console.error(err));
};
const deleteBlogWarning = blogId => {
    const res = confirm("Are you Sure?");
    if (res) deleteBlog(blogId);
};
const deleteBlog = blogId => {
    deleteBlogById(blogId).then(() => {
        Router.pushRoute('/userBlogs');
    })
        .catch(err => console.error(err));
};

const UserBlogs = props => {
    const { blogs } = props;
    const { published, drafts } = seperateBlogs(blogs);

    return (
        <BaseLayout {...props.auth} headerType={'landing'} className="blog-listing-page">
            <div className="masthead" style={{ "backgroundImage": "url('/static/images/home-bg.jpg')" }}>
                <div className="overlay"></div>
                <Container>
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>Blog Dashboard</h1>
                                <span className="subheading">블로그를 써보아요{' '}
                                    <Link route="/blogs/new">
                                        <Button>Create a new Blog</Button>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <BasePage className="blog-user-page">

                <Row>
                    <Col md="6" className="mx-auto text-center">
                        <h2 className="blog-status-title"> Published Blogs </h2>
                        {renderBlogs(published)}
                    </Col>
                    <Col md="6" className="mx-auto text-center">
                        <h2 className="blog-status-title"> Draft Blogs </h2>
                        {renderBlogs(drafts)}
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