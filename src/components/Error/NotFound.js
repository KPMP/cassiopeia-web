import React, { Component } from 'react';
import {Button, Col, Row} from "reactstrap";

class NotFound extends Component {
    render() {
        return (
            <article className="container-fluid">
                <Row id="error-content">
                    <Col xs={0} md={2} lg={4}>&nbsp;</Col>
                    <Col xs={12} md={4} lg={2}>
                        <p className="error-huge align-top">404</p>
                    </Col>
                    <Col xs={12} md={6} lg={6} className="not-found-text">
                        <p className="error-small">Sorry. We couldn't find the <br/>
                            page you're looking for.</p>
                        <p>If you're still having problems, please contact <a href="mailto:admin@kpmp.org">admin@kpmp.org</a></p>
                        <p className="error-button-container">
                            <Button color="primary"
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

export default NotFound;