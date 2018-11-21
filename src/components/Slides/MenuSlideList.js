import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const buttonClassName = 'btn-slide-nav';

class MenuSlideList extends Component {
    render() {
        console.log(this.props);
    	return (
            <Col id="menu-slide-list">
            	<Row className="menu-slide-list-header">
            		<Col sm="11" >WHOLE SLIDE IMAGES</Col>
            		<Col sm="1">
            			<FontAwesomeIcon icon={faCaretLeft} size="lg" onClick={this.props.onToggle} className="clickable"/>
            		</Col>
            	</Row>
            	<Row className="prev-next-buttons">
	            	<Button className={buttonClassName} outline color={'secondary'}>Previous</Button>
	            	<Button className={buttonClassName} outline color={'secondary'}>Next</Button>
            	</Row>
            	<div id="menu-slide-list-slides">
            	
            	{Object.keys(this.props.selectedPatient).length === 0 && this.props.selectedPatient.constructor === Object  ? (
            		<Row className="slide-menu-item">
            			<Col sm="12"> There are no slides to show. </Col>
            		</Row>
            	) : (
        			this.props.selectedPatient.map(function(slide, index) {
                		return <Row className="slide-menu-item">
                			<Col sm="2"><div className="thumbnail" /></Col>
                			<Col sm="10" className="slide-name">{slide.slideName}</Col>
                		</Row>;
                	})
            	)}
            	</div>
            	<Row className="divider" />
            	<Row>
                    <div id="slide-stain-text">
                        <h2>Slide Title</h2>
                        <h3>Slide Stain Name</h3>
                        <p>Slide Stain Flava Text</p>
                    </div>
                </Row>
            </Col>
        );
    }
}

export default MenuSlideList;