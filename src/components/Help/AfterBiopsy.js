import React, { Component } from 'react';
import { Collapse, Col, Row } from 'reactstrap';

class AfterBiopsy extends Component {
    render() {
        return(
            <div className='pb-2'>
                <div onClick={this.props.toggle} data-event={this.props.indexNumber} className={`p-1 rotate help-accordion question-heading ${this.props.isOpen ? 'open': 'collapsed'}`}>
                    What happens after my biopsy?</div>
                <Collapse isOpen={this.props.isOpen }>
                    <div className='py-2'>
                        <Row>
                            <Col lg='4' xs='12'>
                                <h4>Step 1: Embed</h4>
                                <div>One of your samples* is embedded in paraffin (wax) and sliced into thin slices.</div>
                                <span className='annotation'>*Your other samples are processed and sent to KPMP scientists for additional studies.</span>
                            </Col>
                            <Col lg='8' xs='12'>
                                <img src='img/help/image_embed.png'/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg='4' xs='12'>
                                <h4>Step 2: Affix</h4>
                                The slices are stained and affixed to glass microscope slides.
                            </Col>
                            <Col lg='8' xs='12'>
                                <img src='img/help/image_affix.png'/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg='4' xs='12'>
                                <h4>Step 3: Scan</h4>
                                The slides are scanned into digital images and uploaded to the image repository.
                            </Col>
                            <Col lg='8' xs='12'>
                                <img src='img/help/image_scan.png'/>
                            </Col>
                        </Row>
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default AfterBiopsy;