import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Col, Row, Card, CardHeader, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import BasePage from '../components/BasePage';
import { getPortFolios, deletePortfolio } from '../actions/index';
import PortfolioCard from '../components/portfolios/PortfolioCard';
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
    displayDeleteWarning(portfolioId) {
        const confirm = window.confirm("Are you sure to delete this portfolio?");
        if (confirm) return this.deletePortfolio(portfolioId);
    }

    deletePortfolio(portfolioId) {
        deletePortfolio(portfolioId)
            .then(() => Router.pushRoute('/portfolios'));
    }
    renderPosts(portfolios) {
        const { isAuthenticated, isSiteOwner } = this.props.auth;
        return portfolios.map((portfolio, index) => {
            return (
                <Col key={index} md="4">
                    <PortfolioCard portfolio={portfolio}>
                        {
                            isAuthenticated && isSiteOwner &&
                            <React.Fragment>
                                <Button onClick={() => Router.pushRoute(`/portfolio/${portfolio._id}/edit`)} color="warning">Edit</Button>{' '}
                                <Button onClick={() => this.displayDeleteWarning(portfolio._id)} color="danger">Delete</Button>
                            </React.Fragment>
                        }
                    </PortfolioCard>
                </Col>
            );
        });
    }

    render() {
        const { portfolios } = this.props;
        const { isAuthenticated } = this.props.auth;
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