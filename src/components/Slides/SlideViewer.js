import React, { Component } from 'react';
import Menu from './Menu';
import OpenSeadragon from 'openseadragon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCircle, faCog } from '@fortawesome/free-solid-svg-icons';

class SlideViewer extends Component {

	initSeaDragon(){
		let self = this;
		let { selectedPatient } = this.props;
		let slideId = selectedPatient[0].id;
		self.viewer =  OpenSeadragon({
			id: slideId,
			visibilityRatio: 1.0,
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
			navigatorPosition: "BOTTOM_RIGHT",
			tileSources: 'deepZoomImages/' + slideId + ".dzi.json"
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
						<li><a id="zoom-in"><FontAwesomeIcon icon={faPlus} /></a></li>
						<li><a id="reset"><FontAwesomeIcon icon={faCircle} /></a></li>
						<li><a id="zoom-out"><FontAwesomeIcon icon={faMinus} /></a></li>
						<li><a id="full-page"><FontAwesomeIcon icon={faCog}/> </a></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default SlideViewer;