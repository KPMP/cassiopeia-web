import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import Header from './Header';
import { default as ReactGA4 } from 'react-ga4';

class SlideList extends Component {

    constructor(props) {
        super(props);
        this.handleSelectSlide = this.handleSelectSlide.bind(this);
    }

    handleSelectSlide(slide) {
        this.props.setSelectedSlide(slide);
        this.props.toggleMenu(true);
		ReactGA4.event({
			category: 'Participant Portal',
			action: 'Navigation',
			label: 'Select Slide'
		});
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
		    						<Col xs='12' className="no-padding">
										<div className='d-inline-block'>
											<img className="thumbnail img-fluid" src={thumbnailSrc} onError={(e) => {e.target.onerror=null; e.target.src='/img/thumbnail_stain_other.png'}} alt=""/>
											<span className='pl-3 slide-name align-middle'>{slide.slideName}</span>
										</div>
									</Col>
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
