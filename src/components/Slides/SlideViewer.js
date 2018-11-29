import React, { Component } from 'react';
import Menu from './Menu';
import OpenSeadragon from 'openseadragon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faBullseye } from '@fortawesome/free-solid-svg-icons';

class SlideViewer extends Component {

	initSeaDragon(){
		let self = this;
		let { selectedPatient } = this.props;
		let slideId = selectedPatient[0].id;
		self.viewer =  OpenSeadragon({
			id: slideId,
			visibilityRatio: 0.5,
			constrainDuringPan: false,
			defaultZoomLevel: 1,
			minZoomLevel: 1,
			maxZoomLevel: 10,
			zoomInButton: 'zoom-in',
			zoomOutButton: 'zoom-out',
			homeButton: 'reset',
			fullPageButton: 'full-page',
			nextButton: 'next',
			previousButton: 'previous',
			showNavigator: true,
			navigatorAutoFade:  false,
			navigatorPosition: "BOTTOM_RIGHT",
			tileSources: 'deepZoomImages/' + slideId + '.dzi'
		});
	}

	componentDidMount(){
		this.initSeaDragon();
	}

	shouldComponentUpdate(nextProps, nextState){
		return false;
	}

	render() {
		return (
			<div id="slide-viewer">
				<Menu />
				<div className="osd-div" ref={node => {this.el = node;}}>
					<div className="openseadragon" id={this.props.selectedPatient[0].id}></div>
					<ul className="osd-toolbar">
						<li><button id="zoom-in"><FontAwesomeIcon icon={faPlus} /></button></li>
						<li><button id="zoom-out"><FontAwesomeIcon icon={faMinus} /></button></li>
						<li><button id="reset"><FontAwesomeIcon icon={faBullseye} /></button></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default SlideViewer;