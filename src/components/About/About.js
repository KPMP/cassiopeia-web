import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class About extends Component {

    componentDidMount() {
    	this.props.getParticipantSlides();
        document.body.classList.remove('slide-viewer-body');
    }
    
    render() {
    	let slideMessage = "";
    	if (this.props.slides === undefined || this.props.slides.length === 0) {
    		slideMessage= <Row><Col xs-12><div class="alert alert-primary">No images or data have been processed from your biopsy 
    		sample yet. Keep checking back.<br/>If you have questions or need help, please contact your study coordinator.</div></Col></Row>;
    	}
    	
        return (
            <div id="summary-page">
                <div id="summary-content-wrapper">
                    <Col>
                    	{slideMessage}
                        <Row>
                            <h3 className="my-4">About the Participant Portal</h3>
                        </Row>
                        <Row>
                            <h5 className="font-weight-bold">What happens after your biopsy?</h5>
                        </Row>
                        <Row className="row-summary-info row-summary-steps">
                            <Col className="light-border">
                                <p className="center">
                                    <img alt="Step 1, cut the biopsy sample into segments" src="/img/summary/step-1.png" />
                                </p>
                                <p className="center">
                                    <h4>Step 1: Segment</h4>
                                </p>
                                <p>
                                    One of your samples is cut into 3 segments.
                                </p>
                            </Col>
                            <Col className="light-border">
                                <p className="center">
                                    <img alt="Step 2, embed the segments in paraffin" src="/img/summary/step-2.png" />
                                </p>
                                <p className="center">
                                    <h4>Step 2: Embed</h4>
                                </p>
                                <p>
                                    One of these segments is embedded in paraffin and sliced into thin slices.
                                </p>
                            </Col>
                            <Col className="light-border">
                                <p className="center">
                                    <img alt="Step 3, affix the slices to slides" src="/img/summary/step-3.png" />
                                </p>
                                <p className="center">
                                    <h4>Step 3: Affix</h4>
                                </p>
                                <p>
                                    The slices are stained and affixed to slides.
                                </p>
                            </Col>
                            <Col className="light-border">
                                <p className="center">
                                    <img alt="Step 4, scan the slide" src="/img/summary/step-4.png" />
                                </p>
                                <p className="center">
                                    <h4>Step 4: Scan</h4>
                                </p>
                                <p>
                                    The slides are scanned into digital images and uploaded to the participant biopsy image repository.
                                </p>
                            </Col>
                        </Row>
                        <hr/>
                        <Row className="mt-5">
                            <h5 className="font-weight-bold">What am I seeing in these images?</h5>
                        </Row>
                        <Row className="row-summary-info row-summary-organ-images">
                            <Col className="light-border">
                                <p className="center">
                                    <img alt="Photograph of a glomerulus with tubules" src="/img/summary/col1-glomerulus.png" />
                                </p>
                                <p>
                                    Looking at this example of a biopsy slide image, a pathologist would look at the components of the kidney such as glomeruli and tubules. This can reveal evidence of disease and tissue damage.
                                </p>
                            </Col>
                            <Col className="light-border">
                                <p className="center">
                                    <img alt="Diagram of a nephron" src="/img/summary/col2-nephron.png" />
                                </p>
                                <p>
                                    A glomerulus and tubule is part of a nephron. Nephrons are the filtration workhorses of the kidney. Each kidney has around 1 million nephrons.
                                </p>
                            </Col>
                            <Col className="light-border">
                                <p className="center">
                                    <img alt="Diagram of the renal cortex of the kidney" src="/img/summary/col3-renal-cortex.png" />
                                </p>
                                <p>
                                    Nephrons are located in the renal cortex. During the biopsy procedure, the doctor aims to capture multiple nephrons.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </div>
            </div>
        );
    }
}

export default About;
