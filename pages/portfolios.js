import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Col, Row, Card, CardHeader, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import BasePage from '../components/BasePage';
import { getPortFolios } from '../actions/index';
import { Router } from '../routes';


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

    renderPosts(portfolios) {
        const { isAuthenticated, isSiteOwner } = this.props.auth;
        return portfolios.map((portfolio, index) => {
            return (
                <Col key={index} md="4">
                    <React.Fragment>
                        <span>
                            <Card className="portfolio-card">
                                <CardHeader className="portfolio-card-header">{portfolio.position}</CardHeader>
                                <CardBody>
                                    <p className="portfolio-card-city"> {portfolio.location} </p>
                                    <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
                                    <CardText className="portfolio-card-text">{portfolio.description}</CardText>
                                    <div className="readMore">
                                        {
                                            isAuthenticated && isSiteOwner &&
                                            <React.Fragment>
                                                <Button onClick={() => Router.pushRoute(`/portfolio/${portfolio._id}/edit`)} color="warning">Edit</Button>{' '}
                                                <Button color="danger">Update</Button>
                                            </React.Fragment>
                                        } </div>
                                </CardBody>

                            </Card>
                        </span>
                    </React.Fragment>
                </Col>

            );
        });
    }

    render() {
        const { portfolios } = this.props;
        const { isAuthenticated } = this.props.auth;
        console.log(this.props);
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="portfolio-page" title="Portfolios">
                    {isAuthenticated &&
                        <Button className="create-port-btn" color="success" onClick={() => Router.pushRoute('/portfolioNew')}>
                            Create Portfolio
                    </Button>
                    }
                    <Row>
                        {this.renderPosts(portfolios)}
                    </Row>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default PortFolios;;