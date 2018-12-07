import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import Parser from 'html-react-parser';

class StainInformation extends Component {
	
	render() {
		return(
			<Row id="stain-information">
        		<Col>
                    <div id="slide-stain-text">
                        <div className="slide-name-stain-text">{Parser(this.props.selectedPatient.selectedSlide.slideName)}</div>
                        <div className="stain-title">{Parser(this.props.selectedPatient.selectedSlide.stain.title)}</div>
                        <div className="stain-description">{Parser(this.props.selectedPatient.selectedSlide.stain.description)}</div>
                    </div>
                </Col>
            </Row>
		);
	}
}

export default StainInformation;