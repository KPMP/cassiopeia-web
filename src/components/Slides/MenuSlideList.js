import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faChevronRight, faChevronLeft, faPrint, faDownload } from '@fortawesome/free-solid-svg-icons';
import { downloadSlide } from './downloadSlide';
import Parser from 'html-react-parser';

class MenuSlideList extends Component {

    constructor(props) {
        super(props);
        this.noSlidesFound = this.noSlidesFound.bind(this);
        this.handleSelectSlide = this.handleSelectSlide.bind(this);
        this.handleDownload = this.handleDownload.bind(this);
    }

    noSlidesFound() {
        return Object.keys(this.props.selectedPatient.slides).length === 0
            && this.props.selectedPatient.slides.constructor === Object;
    }

    handleSelectSlide(slide) {
        this.props.setSelectedSlide(slide);
    }
    
    handleDownload() {
    	let downloadFileName = this.props.selectedPatient.selectedSlide.slideName + ".jpg";
    	downloadSlide(downloadFileName);
    }

    render() {
        let selectedSlideId = this.props.selectedPatient.selectedSlide.id;
    	return this.noSlidesFound() ? (
            <Col id="menu-slide-list">
                <Row className="slide-menu-item">
                    <Col sm="12"> There are no slides to show. </Col>
                </Row>
            </Col>
            ) : (
            <Col id="menu-slide-list">
            	<Row className="menu-slide-list-header">
            		<Col sm="11" >WHOLE SLIDE IMAGES</Col>
            		<Col sm="1">
            			<FontAwesomeIcon icon={faCaretLeft} size="lg" onClick={this.props.onToggle} className="clickable"/>
            		</Col>
            	</Row>
                <Row className="prev-next-buttons" noGutters>
                    <Col>
                        <Button outline color={'secondary'} onClick={this.handleDownload}>
                            <a id="download" //eslint-disable-line
                            ><FontAwesomeIcon icon={faDownload} size="2x" className="clickable"/></a>
                        </Button>
                        <Button outline color={'secondary'}>
                            <FontAwesomeIcon icon={faPrint} size="2x"/>
                        </Button>
                    </Col>
                    <Col>
                        <Button outline color={'secondary'}>
                            <FontAwesomeIcon icon={faChevronLeft} size="2x"/>
                        </Button>
                        <Button outline color={'secondary'}>
                            <FontAwesomeIcon icon={faChevronRight} size="2x"/>
                        </Button>
                    </Col>
                </Row>
            	<div id="menu-slide-list-slides">
                    {
                        this.props.selectedPatient.slides.map(function(slide, index) {
                            let highlightedClass = selectedSlideId === slide.id ? " slide-highlighted" : "";
                            return <Row className={"slide-menu-item " + highlightedClass} onClick={() => this.handleSelectSlide(slide)}>
                                <Col sm="2"><div className="thumbnail" /></Col>
                                <Col sm="10" className="slide-name">{slide.slideName}</Col>
                            </Row>
                        }, this)
                    }
            	</div>
            	<Row className="divider" />
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

export default MenuSlideList;