import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faPrint, faDownload } from '@fortawesome/free-solid-svg-icons';
import { getNextSlide, getPreviousSlide, noSlidesFound, downloadSlide } from './slideHelpers.js';
import Parser from 'html-react-parser';
import SlidePrintManager from './SlidePrintManager';
import ReactGA from 'react-ga';

class MenuSlideList extends Component {

    constructor(props) {
        super(props);
        this.onPrint = this.onPrint.bind(this);
        this.handleSelectSlide = this.handleSelectSlide.bind(this);
        this.handleDownload = this.handleDownload.bind(this);
    }

    onPrint() {
        ReactGA.event({
            category: 'Slide View',
            action: 'Print Slide',
            label: this.props.selectedPatient.selectedSlide.slideName
        });
        SlidePrintManager.getInstance().beforePrint();
        setTimeout(window.print, 10);
    }

    handleSelectSlide(slide) {
        this.props.setSelectedSlide(slide);
    }
    
    handleDownload() {
        ReactGA.event({
            category: 'Slide View',
            action: 'Download Slide',
            label: this.props.selectedPatient.selectedSlide.slideName
        });
    	let downloadFileName = this.props.selectedPatient.selectedSlide.slideName + ".jpg";
    	downloadSlide(downloadFileName);
    }

    handleNextSlide() {
        let nextSlide = getNextSlide(this.props.selectedPatient.slides, this.props.selectedPatient.selectedSlide);
        this.props.setSelectedSlide(nextSlide);
    }

    handlePreviousSlide() {
        let previousSlide = getPreviousSlide(this.props.selectedPatient.slides, this.props.selectedPatient.selectedSlide);
        this.props.setSelectedSlide(previousSlide);
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
            	<Row className="menu-slide-list-header">
            		<Col sm="12" >WHOLE SLIDE IMAGES</Col>
            	</Row>
                <Row className="prev-next-buttons" noGutters>
                    <Col>
                        <Button outline color={'secondary'} onClick={this.handleDownload}>
                            <a id="download" //eslint-disable-line
                            ><FontAwesomeIcon icon={faDownload} size="2x" className="clickable"/></a>
                        </Button>
                        <Button outline color={'secondary'} onClick={this.onPrint}>
                            <FontAwesomeIcon icon={faPrint} size="2x" />
                        </Button>
                    </Col>
                    <Col>
                        <Button outline color={'secondary'} onClick={() => this.handlePreviousSlide()}>
                            <FontAwesomeIcon icon={faChevronLeft} size="2x"/>
                        </Button>
                        <Button outline color={'secondary'} onClick={() => this.handleNextSlide()}>
                            <FontAwesomeIcon icon={faChevronRight} size="2x"/>
                        </Button>
                    </Col>
                </Row>
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
