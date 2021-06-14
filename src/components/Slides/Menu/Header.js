import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faChevronRight, faChevronLeft, faPrint, faDownload } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'reactstrap';
import ReactGA from 'react-ga';
import SlidePrintManager from './SlidePrintManager';
import { getNextSlide, getPreviousSlide, downloadSlide } from '../slideHelpers.js';
import { isMobile } from 'react-device-detect';

class Header extends Component {
	
	constructor(props) {
		super(props);
        this.onPrint = this.onPrint.bind(this);
        this.handleDownload = this.handleDownload.bind(this);
	}
	
    handleNextSlide() {
        let nextSlide = getNextSlide(this.props.selectedPatient.slides, this.props.selectedPatient.selectedSlide);
        this.props.setSelectedSlide(nextSlide);
        this.props.toggleMenu(true);
		ReactGA.event({
			category: 'Participant Portal',
			action: 'Select Slide',
		});
    }

    handlePreviousSlide() {
        let previousSlide = getPreviousSlide(this.props.selectedPatient.slides, this.props.selectedPatient.selectedSlide);
        this.props.setSelectedSlide(previousSlide);
        this.props.toggleMenu(true);
		ReactGA.event({
			category: 'Participant Portal',
			action: 'Select slide',
		});
    }
    
    handleDownload() {
        ReactGA.event({
            category: 'Participant Portal',
            action: 'Download Slide'
        });
    	let downloadFileName = this.props.selectedPatient.selectedSlide.slideName + ".jpg";
    	downloadSlide(downloadFileName);
    }
    
    onPrint() {
        ReactGA.event({
            category: 'Participant Portal',
            action: 'Print Slide'
        });
        SlidePrintManager.getInstance().beforePrint();
        setTimeout(window.print, 10);
    }
    
	render() {
		return(
			<div className="menu-slide-list-header">
				<Row>
					<Col className="menu-title">WHOLE SLIDE IMAGES</Col>
                    <div className="float-right">
					    <Col className="menu-control"><FontAwesomeIcon icon={faCaretLeft} className="clickable" onClick={this.props.toggleMenu} size="lg"/></Col>
				    </div>
                </Row>
				<Row>
					<Col className="float-left" xs="6">
						{ !isMobile &&
							<span>
								<FontAwesomeIcon icon={faChevronLeft} className="clickable hoverable pad-right" onClick={() => this.handlePreviousSlide()} size="lg"/>
								<FontAwesomeIcon icon={faChevronRight} className="clickable hoverable" onClick={() => this.handleNextSlide()} size="lg"/>
							</span>
						}
					</Col>
				    <Col xs="6">
				    	<div className="float-right">
				    		{ !isMobile && 
				    			<FontAwesomeIcon icon={faPrint} onClick={this.onPrint} className="clickable hoverable pad-right" size="lg"/>
				    		}
				            <a id="download" //eslint-disable-line
				            ><FontAwesomeIcon icon={faDownload} className="clickable hoverable" onClick={this.handleDownload} size="lg" /></a>
			            </div>
				    </Col>
					
				</Row>
        	</div>
		);
	}
	
}

export default Header;