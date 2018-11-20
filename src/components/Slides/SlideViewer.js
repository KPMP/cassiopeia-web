import React, { Component } from 'react';
import Menu from './Menu';

class SlideViewer extends Component {
	render() {
		return (
			<div id="slide-viewer">
				<h1 className="float-right red-text"> I am the slide viewer!</h1>
				<Menu />
			</div>
		);
	}
}

export default SlideViewer;