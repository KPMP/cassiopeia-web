import React, { Component } from 'react';
import { Collapse, Col, Row } from 'reactstrap';

class WhatSeen extends Component {
    render() {
        return (
            <div className='pb-2'>
                <div onClick={this.props.toggle} data-event={this.props.indexNumber} className={`p-1 rotate help-accordion question-heading ${this.props.isOpen ? 'open' : 'collapsed'}`}>
                    What do researcher see in these images?</div>
                <Collapse isOpen={this.props.isOpen}>
                    <div className='py-2'>
                        <Row>
                            <Col xs='4'>
                                <p>
                                    If you zoom in on the part of your kidney where the cortex and medulla meet,
                                    you will see that it is made up of many, many nephrons. The main filtering
                                    work of the kidney happens in the nephrons.
                                </p>
                                <p>
                                    During the biopsy procedure, the doctor aims to capture multiple nephrons.
                                </p>
                            </Col>
                            <Col xs='8'>
                                <img src='img/help/figure_kidney.png' />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='4'>
                                <p>
                                    Each nephron is made up of a glomerulus (blood filter) that connects to the
                                    collecting duct by tubules (tubes where uring flows).
                                </p>
                                <p>
                                    The sections of the tubule are further classified based on their location 
                                    and function.
                                </p>
                            </Col>
                            <Col xs='8'>
                                <img src='img/help/figure_nephron.png' />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='4'>
                                <p>
                                    A pthologist can see certain forms and parts of the kidney that show the type
                                    of disease and how much damage is in the biopsy.
                                </p>
                            </Col>
                            <Col xs='8'>
                                <img src='img/help/figure_wsi.png' />
                            </Col>
                        </Row>
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default WhatSeen;