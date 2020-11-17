import React, { Component } from 'react';
import {Button, Col, Row} from "reactstrap";

class NotFound extends Component {
    render() {
        return (
            <article className="container-fluid">
                <Row id="error-content">
                    <Col md={2} lg={4}>&nbsp;</Col>
                    <Col md={4} lg={2} className={"ml-auto"}>
                        <img src="img/404.svg" alt="Page not found"/>
                    </Col>
                    <Col md={6} lg={6} className="not-found-text">
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