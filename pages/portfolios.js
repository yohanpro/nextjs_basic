import React, { Component } from 'react';
import axios from 'axios';
import BaseLayout from '../components/layouts/BaseLayout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Col, Row, Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';
import BasePage from '../components/BasePage';
import { getPortFolios } from '../actions/index';
// import { Link } from '../routes';

class PortFolios extends Component {

    static async getInitialProps() {
        let portfolios = [];
        try {
            portfolios = await getPortFolios();
        } catch (error) {
            console.error(error);
        }
        return { portfolios };
    }

    renderPosts(posts) {

        return posts.map((post, index) => {
            console.log(post);
            return (
                <Col key={index} md="4">
                    <React.Fragment>
                        <span>
                            <Card className="portfolio-card">
                                <CardHeader className="portfolio-card-header">{post.position}</CardHeader>
                                <CardBody>
                                    <p className="portfolio-card-city"> {post.location} </p>
                                    <CardTitle className="portfolio-card-title">{post.title}</CardTitle>
                                    <CardText className="portfolio-card-text">{post.description}</CardText>
                                    <div className="readMore"> </div>
                                </CardBody>
                            </Card>
                        </span>
                    </React.Fragment>
                </Col>

            );
        });
    }

    render() {
        const { posts } = this.props;

        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="portfolio-page" title="Portfolios">
                    <Row>
                        {this.renderPosts(posts)}
                    </Row>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default PortFolios;;