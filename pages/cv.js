import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Col, Row } from 'reactstrap';

class cv extends React.Component {
    render() {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage title="Preview of My CV" className="cv-page">
                    <Row>
                        <Col md={{ size: 8, offset: 2 }}>
                            <div className="cv-title">
                                <a download="cv.pdf" className="btn btn-success" href="/static/cv.pdf">Download my Cv</a>
                            </div>
                            <iframe style={{ width: '100%', height: '800px' }} src='/static/cv.pdf'>

                            </iframe>
                        </Col>
                    </Row>
                </BasePage>
            </BaseLayout >
        );
    }
};
export default cv;