import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { noSlidesFound } from '../slideHelpers.js';
import Header from './Header';

class SlideList extends Component {

    constructor(props) {
        super(props);
        this.handleSelectSlide = this.handleSelectSlide.bind(this);
    }

    handleSelectSlide(slide) {
        this.props.setSelectedSlide(slide);
        this.props.toggleMenu(true);
    }
    
    componentDidUpdate (){
    	noSlidesFound(this.props.selectedPatient);
    }


    render() {
		return (
			<div id="menu-slide-list">
				<Header {...this.props}/>
				<Col id="slides-col">
    				<div id="menu-slide-list-slides">
    				{
    					this.props.selectedPatient.slides.map(function(slide, index) {
    						let highlightedClass = this.props.selectedPatient.selectedSlide.id === slide.id ? " slide-highlighted" : "";
    						let thumbnailSrc = "/img/thumbnail_stain_" + slide.stain.type.toLowerCase() + ".png";
							
    						return (
	    						<Row className={"slide-menu-item " + highlightedClass} onClick={() => this.handleSelectSlide(slide)}>
		    						<Col xs={{size: "auto"}} className="no-padding"><img className="thumbnail" src={thumbnailSrc} onError={(e) => {e.target.onerror=null; e.target.src='/img/thumbnail_stain_other.png'}} alt=""/></Col>
		    						<Col xs={{size: "auto"}} className="slide-name no-padding">{slide.slideName}</Col>
	    						</Row>
    						)
    					}, this)
    				}
    				</div>
				</Col>
			</div>
		);
    	
    }
}

export default SlideList;
