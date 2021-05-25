import React, { Component } from 'react';
import { Collapse, Col, Row } from 'reactstrap';

class WhatIsStaining extends Component {
    render() {
        return (
            <div className='pb-2'>
                <div onClick={this.props.toggle} data-event={this.props.indexNumber} className={`p-1 rotate help-accordion question-heading ${this.props.isOpen ? 'open' : 'collapsed'}`}>
                    What is staining and why is it important?</div>
                <Collapse isOpen={this.props.isOpen}>
                    <div className='py-2'>
                        <Row>
                            <Col lg='4' xs='12'>
                                <p>Staining is a technique used to enhance contrast in samples,
                                generally at the microscopic level. Stains and dyes are
                                frequently used in histology (the study of tissue under the
                                microscope) to study and diagnose disease. There are many
                                different stains that can be applied to tissue and they
                                serve different purposes.</p>
                                <p>Biopsy stains are important because they allow the pathologist,
                                a doctor who studies the kidney tissue, to see certain parts
                                and forms in the kidney. Stains allow the pathologis to find
                                out about the type of disease and how much damage is in the
                                biospy. This information helps researchers map pathways involved
                                in kidney disease among study participants.
                                </p>
                                <p>Pictured: A stained histologic specimen, sandwiched between
                                a glass microscope slide.
                                </p>
                            </Col>
                            <Col lg='8' xs='12'>
                                <img src='img/help/pathologist-slide.png' />
                            </Col>
                        </Row>

                    </div>
                </Collapse>
            </div>
        );
    }
}

export default WhatIsStaining;