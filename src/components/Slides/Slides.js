import React, { Component } from 'react';
import { Row } from 'reactstrap';
import SlideViewer from './SlideViewer';

class Slides extends Component {
	render() {
		return(
			<Row >
				<SlideViewer />
			</Row>
		);
	}
}

export default Slides;
