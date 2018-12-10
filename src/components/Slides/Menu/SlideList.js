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
				<Col>
    				<div id="menu-slide-list-slides">
    				{
    					this.props.selectedPatient.slides.map(function(slide, index) {
    						let highlightedClass = this.props.selectedPatient.selectedSlide.id === slide.id ? " slide-highlighted" : "";
    						return (
	    						<Row className={"slide-menu-item " + highlightedClass} onClick={() => this.handleSelectSlide(slide)}>
		    						<Col sm="2" className="no-padding"><img className="thumbnail" src="/img/tn_KPMP-Ex2_TRI_1of1.jpeg" alt=""/></Col>
		    						<Col sm="10" className="slide-name">{slide.slideName}</Col>
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
