import React, { Component } from 'react';
import { Collapse, Col, Row } from 'reactstrap';

class MakeRecommendation extends Component {
    render() {
        return (
            <div className='pb-2'>
                <div onClick={this.props.toggle} data-event={this.props.indexNumber} className={`p-1 rotate help-accordion question-heading ${this.props.isOpen ? 'open' : 'collapsed'}`}>
                    How do I make a recommendation about improving this app?</div>
                <Collapse isOpen={this.props.isOpen}>
                    <div className='py-2'>
                        <Row>
                            <Col xs='12'>
                                <p>Contact your research coordinators with suggestions for improvements to the Participant
                                    Portal. They can make sure your ideas reach the software team that maintains the Participant Portal.
                                </p>
                            </Col>
                        </Row>

                    </div>
                </Collapse>
            </div>
        );
    }
}

export default MakeRecommendation;