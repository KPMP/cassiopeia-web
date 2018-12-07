import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { noSlidesFound } from '../slideHelpers.js';
import Parser from 'html-react-parser';

class SlideList extends Component {

    constructor(props) {
        super(props);
        this.handleSelectSlide = this.handleSelectSlide.bind(this);
    }

    handleSelectSlide(slide) {
        this.props.setSelectedSlide(slide);
    }
    
    render() {
    	return noSlidesFound(this.props.selectedPatient) ? (
            <Col id="menu-slide-list">
                <Row className="slide-menu-item">
                    <Col sm="12"> There are no slides to show. </Col>
                </Row>
            </Col>
            ) : (
            <Col id="menu-slide-list">

            	<div id="menu-slide-list-slides">
                    {
                        this.props.selectedPatient.slides.map(function(slide, index) {
                            let highlightedClass = this.props.selectedPatient.selectedSlide.id === slide.id ? " slide-highlighted" : "";
                            return <Row className={"slide-menu-item " + highlightedClass} onClick={() => this.handleSelectSlide(slide)}>
                                <Col sm="2"><div className="thumbnail" /></Col>
                                <Col sm="10" className="slide-name">{slide.slideName}</Col>
                            </Row>
                        }, this)
                    }
            	</div>
            	<Row>
            		<Col>
	                    <div id="slide-stain-text">
	                        <div className="slide-name-stain-text">{Parser(this.props.selectedPatient.selectedSlide.slideName)}</div>
	                        <div className="stain-title">{Parser(this.props.selectedPatient.selectedSlide.stain.title)}</div>
	                        <div className="stain-description">{Parser(this.props.selectedPatient.selectedSlide.stain.description)}</div>
	                    </div>
                    </Col>
                </Row>
            </Col>
        )
    }
}

export default SlideList;
