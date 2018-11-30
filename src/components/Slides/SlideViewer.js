import React, { Component } from 'react';
import Menu from './Menu';
import OpenSeadragon from 'openseadragon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCircle, faCog } from '@fortawesome/free-solid-svg-icons';

class SlideViewer extends Component {

	constructor(props) {
		super(props);
		this.noSlidesFound = this.noSlidesFound.bind(this);
	}

	initSeaDragon() {
		let self = this;
		let slideId = this.props.selectedPatient.selectedSlide.id;
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
			navigatorPosition: "BOTTOM_RIGHT",
			tileSources: 'deepZoomImages/' + slideId + '.dzi'
		});
	}

    noSlidesFound() {
        return Object.keys(this.props.selectedPatient.slides).length === 0
            && this.props.selectedPatient.slides.constructor === Object;
    }

	componentDidMount(){
		if(!this.noSlidesFound()) {
            this.initSeaDragon();
		}
	}

	componentDidUpdate(){
		this.viewer.destroy();
		this.initSeaDragon();
	}

	render() {
		let slideId = this.props.selectedPatient.selectedSlide.id;
		return (
			<div id="slide-viewer">
            	<Menu />
				{ this.noSlidesFound() ? (
					null
				) : (
                    <div className="osd-div" ref={node => {this.el = node;}}>
                        <div className="openseadragon" id="osdId" />
                        <ul className="osd-toolbar">
                            <li><button id="zoom-in"><FontAwesomeIcon icon={faPlus} /></button></li>
                            <li><button id="reset"><FontAwesomeIcon icon={faCircle} /></button></li>
                            <li><button id="zoom-out"><FontAwesomeIcon icon={faMinus} /></button></li>
                            <li><button id="full-page"><FontAwesomeIcon icon={faCog}/> </button></li>
                        </ul>
                    </div>
				) }
			</div>
		)
	}
}

export default SlideViewer;