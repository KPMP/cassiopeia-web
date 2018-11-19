import React, { Component } from 'react';
import { Row } from 'reactstrap';
import SlideViewer from './SlideViewer';

class Slides extends Component {
	render() {
		return(
			<Row >
	<div>You are viewing slides for {this.props.selectedPatient.id} </div>
				<SlideViewer />
			</Row>
		);
	}
}

export default Slides;
