import React, { Component } from 'react';
import { Col, Row, Button } from 'reactstrap';

class ErrorPage extends Component {
    render() {
        return (
            <article className="container-fluid" id="error-container">
                <Row id="error-content">
                    <Col xs={0} md={2}>&nbsp;</Col>
                    <Col xs={12} md={6}>
                        <p className="error-big">Oops...</p>
                        <p className="error-small">Looks like something went wrong.<br/>We&#39;re working on it.</p>
                        <p className="error-button-container">
                            <Button className="btn btn-primary"
                                    onClick={() => window.location.href = "/"}>
                                    Back to Home
                            </Button>
                        </p>
                    </Col>
                </Row>
            </article>
        );
    }
}

export default ErrorPage;