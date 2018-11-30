import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faChevronRight, faChevronLeft, faPrint, faDownload } from '@fortawesome/free-solid-svg-icons';

class MenuSlideList extends Component {

    constructor(props) {
        super(props);
        this.noSlidesFound = this.noSlidesFound.bind(this);
        this.onPrint = this.onPrint.bind(this);
    }

    noSlidesFound() {
        return Object.keys(this.props.selectedPatient).length === 0
            && this.props.selectedPatient.constructor === Object;
    }

    onPrint() {
        let slideTitleText = 'Slide Title';
        let slideTypeText = 'Slide Type';

        let openseadragon = document.getElementsByClassName('openseadragon')[0];
        let canvasDiv = openseadragon.getElementsByClassName('openseadragon-canvas')[0];
        let canvas = canvasDiv.getElementsByTagName('canvas')[0];
        let imageContainer = document.createElement('img');
        let slideTitle = document.createElement('h1');
        let slideType = document.createElement ('h2');
        slideTitle.setAttribute('id', 'print-slide-title');
        slideType.setAttribute('id', 'print-slide-type');
        slideTitle.innerHTML = slideTitleText;
        slideType.innerHTML = slideTypeText;

        imageContainer.setAttribute('id', 'print-slide-image');
        imageContainer.setAttribute('src', canvas.toDataURL('image/jpeg'));

        document.body.appendChild(imageContainer);
        document.body.appendChild(slideTitle);
        document.body.appendChild(slideType);
        window.print();
        document.body.removeChild(imageContainer);
        document.body.removeChild(slideTitle);
        document.body.removeChild(slideType);
    }

    render() {
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
                        <Button outline color={'secondary'}>
                            <FontAwesomeIcon icon={faDownload} size="2x"/>
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
                        this.props.selectedPatient.map(function(slide, index) {
                            return <Row className="slide-menu-item">
                                <Col sm="2"><div className="thumbnail" /></Col>
                                <Col sm="10" className="slide-name">{slide.slideName}</Col>
                            </Row>
                        })
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