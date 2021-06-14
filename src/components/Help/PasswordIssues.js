import React, { Component } from 'react';
import { Collapse, Col, Row } from 'reactstrap';

class PasswordIssues extends Component {
    render() {
        return (
            <div className='pb-2'>
                <div onClick={this.props.toggle} data-event={this.props.indexNumber} className={`p-1 rotate help-accordion question-heading ${this.props.isOpen ? 'open' : 'collapsed'}`}>
                    Who do I contact for sign-in or password problems?</div>
                <Collapse isOpen={this.props.isOpen}>
                    <div className='py-2'>
                        <Row>
                            <Col xs='12'>
                                <p>
                                    Your sign-in credentials (email address and password) do not expire. Contact your 
                                    research coordinator if you need help with changing your email address or 
                                    resetting your password if you forgot it.
                                </p>
                            </Col>
                        </Row>

                    </div>
                </Collapse>
            </div>
        );
    }
}

export default PasswordIssues;