import React, { Component } from 'react';
import { Row } from 'reactstrap';
import SlideViewerContainer from './SlideViewerContainer';

class Slides extends Component {
	render() {
		return(
			<Row >
				<SlideViewerContainer />
			</Row>
		);
	}
}

export default Slides;