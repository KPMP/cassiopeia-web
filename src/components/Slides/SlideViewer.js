import React, { Component } from 'react';
import MenuContainer from './MenuContainer';

class SlideViewer extends Component {
	render() {
		return (
			<div id="slide-viewer">
				<h1 className="float-right red-text"> I am the slide viewer!</h1>
				<MenuContainer/>
			</div>
		);
	}
}

export default SlideViewer;