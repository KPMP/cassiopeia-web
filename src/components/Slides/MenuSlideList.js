import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faChevronRight, faChevronLeft, faPrint, faDownload } from '@fortawesome/free-solid-svg-icons';
import { downloadSlide } from './downloadSlide';

class MenuSlideList extends Component {

    constructor(props) {
        super(props);
        this.noSlidesFound = this.noSlidesFound.bind(this);

        this.onPrint = this.onPrint.bind(this);
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

    onPrint() {
        console.log('!!! SlideTitle and SlideType are dummy vars; need to bring in state from redux');
        let slideTitleText = 'Slide Title';
        let slideTypeText = 'Slide Type';

        let openseadragon = document.getElementsByClassName('openseadragon')[0];
        let canvasDiv = openseadragon.getElementsByClassName('openseadragon-canvas')[0];
        let canvas = canvasDiv.getElementsByTagName('canvas')[0];
        let printContainer = document.createElement('div');
        let imageContainer = document.createElement('img');
        let textContainer = document.createElement('div');
        let slideTitle = document.createElement('h3');
        let slideType = document.createElement ('h2');

        slideTitle.setAttribute('id', 'print-slide-title');
        slideTitle.innerHTML = slideTitleText;
        slideType.setAttribute('id', 'print-slide-type');
        slideType.innerHTML = slideTypeText;
        textContainer.setAttribute('id', 'print-slide-text');
        textContainer.appendChild(slideType);
        textContainer.appendChild(slideTitle);

        imageContainer.setAttribute('id', 'print-slide-image');
        imageContainer.setAttribute('src', canvas.toDataURL('image/jpeg'));

        document.body.appendChild(printContainer);
        printContainer.setAttribute('id', 'print-container');
        printContainer.appendChild(imageContainer);
        printContainer.appendChild(textContainer);

        window.print();
        document.body.removeChild(printContainer);
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
                        <Button outline color={'secondary'} onClick={this.onPrint}>
                            <FontAwesomeIcon icon={faPrint} size="2x" />
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
                    <div id="menu-slide-stain-text" class="slide-stain-text">
                        <h2>Slide Title</h2>
                        <h3>Slide Stain Name</h3>
                        <p>Slide Stain Flava Text</p>
                    </div>
                </Row>
            </Col>
        )
    }
}

export default MenuSlideList;