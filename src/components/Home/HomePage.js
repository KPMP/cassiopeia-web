import React, { Component } from 'react';
import { Row, Col, Spinner } from 'reactstrap';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.props.getParticipantSlides();
    }

    render() {
        return (
            <article id='landing-page' className='container-fluid text-center'>
                <Row >
                    <Col xs={12}>
                        Please wait while we look up your slides...
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Spinner color='primary' />
                    </Col>
                </Row>
            </article>

        )
    }
}

export default HomePage;