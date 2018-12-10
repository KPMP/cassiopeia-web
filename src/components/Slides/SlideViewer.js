import React, { Component } from 'react';
import OpenSeadragon from 'openseadragon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faBullseye, faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { noSlidesFound } from './slideHelpers';
import BurgerMenu from './BurgerMenu';

class SlideViewer extends Component {

	initSeaDragon() {
		let self = this;
		let slideId = this.props.selectedPatient.selectedSlide.id;
		OpenSeadragon.setString("Tooltips.Home","Reset pan & zoom");
		self.viewer =  OpenSeadragon({
			id: "osdId",
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
			navigatorId:   'osd-navigator',
			tileSources: 'deepZoomImages/' + slideId + '.dzi'
		});
	}

	componentDidMount(){
		if(!noSlidesFound(this.props.selectedPatient)) {
            this.initSeaDragon();
		}
	}

	componentDidUpdate(){
		this.viewer.destroy();
		this.viewer.navigator.destroy();
		this.initSeaDragon();
	}

	render() {
		return (
			<div id="slide-viewer">
				<BurgerMenu />
				{ noSlidesFound(this.props.selectedPatient) ? (
					null
				) : (

					<div className="osd-div" ref={node => {this.el = node;}}>
						<div className="openseadragon" id="osdId"></div>
						<ul className="osd-toolbar">
							<li><div className="osd-button" id="zoom-in"><FontAwesomeIcon icon={faPlus} /></div></li>
							<li><div className="osd-button" id="zoom-out"><FontAwesomeIcon icon={faMinus} /></div></li>
							<li><div className="osd-button" id="reset"><FontAwesomeIcon icon={faCrosshairs} /></div></li>
						</ul>
						<div className="osd-navigator-wrapper">
							<div id="osd-navigator"></div>
						</div>
					</div>
				) }
			</div>
		)
	}
}

export default SlideViewer;