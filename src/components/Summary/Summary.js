import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import PatientSelectContainer from './PatientSelectContainer';

class Summary extends Component {
	
	componentDidMount() {
		document.body.classList.remove('slide-viewer-body');
	}
	
    render() {
        return (
            <div id="summary-page">
                <div id="patient-select-wrapper">
                    <p>
                        Select a KPMP ID and click view slides to get started:
                    </p>
                    <PatientSelectContainer />
                    <div className="alert-info content-warning">The whole slide images currently available are from KPMP pilot nephrectomies and non-KPMP biopsy tissue.</div>
                </div>
                <div id="summary-content-wrapper">
                    <Col>
                        <Row className="row-summary-question">
                            How does my biopsy get turned into images?
                        </Row>
                        <Row className="row-summary-process">
                            <img alt="The biopsy process: Segment, Embed, Affix, and Scan" src="/img/summary/biopsy-process.png" />
                        </Row>
                        <Row className="row-summary-info row-summary-steps">
                            <Col className="light-border">
                                <p className="center">
                                    <img alt="Step 1, cut the biopsy sample into segments" src="/img/summary/step-1.png" />
                                </p>
                                <p className="center">
                                    <b>Step 1: Segment</b>
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
                                    <b>Step 2: Embed</b>
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
                                    <b>Step 3: Affix</b>
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
                                    <b>Step 4: Scan</b>
                                </p>
                                <p>
                                    The slides are scanned into digital images and uploaded to the patient biopsy image repository.
                                </p>
                            </Col>
                        </Row>
                        <Row  className="row-summary-question">
                            What am I seeing in these images?
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

export default Summary;
