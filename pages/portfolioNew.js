
import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import PortFolioCreateFrom from '../components/portfolios/PortfolioCreateForm';
import { Row, Col } from 'reactstrap';

class PortfolioNew extends React.Component {

    render() {
        return (
            <BaseLayout title="PortFolio create Page" {...this.props.auth}>
                <BasePage className="portfolio-create-page" title="portfolio-create-page">
                    <PortFolioCreateFrom />
                </BasePage>
            </BaseLayout>
        );
    }
}

export default withAuth('siteOwner')(PortfolioNew);
