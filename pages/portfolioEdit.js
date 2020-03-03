import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm';

import { Row, Col } from 'reactstrap';

import { createPortfolio, getPortFolioById } from '../actions';

import withAuth from '../components/hoc/withAuth';
import { Router } from '../routes';
import moment from 'moment';


class PortfolioEdit extends React.Component {
    static async getInitialProps({ query }) {
        let portfolio = {};
        try {
            portfolio = await getPortFolioById(query.id);
        } catch (error) {
            // console.error(error);
        }
        console.log('portfolo', portfolio);
    }

    constructor(props) {
        super();
        this.state = {
            error: undefined
        };

        this.savePortfolio = this.savePortfolio.bind(this);
    }

    savePortfolio(portfolioData, { setSubmitting }) {
        // setSubmitting(true);

        // createPortfolio(portfolioData)
        //     .then((portfolio) => {
        //         setSubmitting(false);
        //         this.setState({ error: undefined });
        //         Router.pushRoute('/portfolios');
        //     })
        //     .catch(err => {
        //         const error = err.message || 'Server Error!';
        //         setSubmitting(false);
        //         this.setState({ error });
        //     });
    }

    render() {
        const { error } = this.state;

        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="portfolio-create-page" title="Create New Portfolio">
                    <Row>
                        <Col md="6">
                            <div>dfdf</div>
                        </Col>
                    </Row>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default withAuth('siteOwner')(PortfolioEdit);
