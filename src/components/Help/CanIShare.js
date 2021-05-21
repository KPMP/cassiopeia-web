import React, { Component } from 'react';
import { Collapse, Col, Row } from 'reactstrap';

class CanIShare extends Component {
    render() {
        return (
            <div className='pb-2'>
                <div onClick={this.props.toggle} data-event={this.props.indexNumber} className={`p-1 rotate help-accordion question-heading ${this.props.isOpen ? 'open' : 'collapsed'}`}>
                    Can I share these images?</div>
                <Collapse isOpen={this.props.isOpen}>
                    <div className='py-2'>
                        <Row>
                            <Col xs='12'>
                                <p>Only you will be able to access your KPMP biopsy images in
                                    the Participant Portal. The portal has options for you to save or print your
                                    images. You may share your biopsy images with your family and/or your care team.
                                </p>
                            </Col>
                        </Row>

                    </div>
                </Collapse>
            </div>
        );
    }
}

export default CanIShare;