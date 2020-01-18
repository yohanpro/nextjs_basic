import React from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';

class Portfolio extends React.Component {

    render() {
        return (
            <BaseLayout>
                <h1>hi</h1>
            </BaseLayout>
        );
    }
}

export default withRouter(Portfolio);
