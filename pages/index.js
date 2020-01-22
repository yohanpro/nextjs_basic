import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'reactstrap';



class Index extends Component {

    render() {
        return (
            <BaseLayout>
                <Container>
                    <Button color="danger">Danger!</Button>
                </Container>
            </BaseLayout>
        );
    }
}



export default Index;

