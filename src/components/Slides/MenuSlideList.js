import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

class MenuSlideList extends Component {
    render() {
        return (
            <Col id="menu-slide-list">
            	<Row className="menu-slide-list-header">
            		<Col sm="11" >WHOLE SLIDE IMAGES</Col>
            		<Col sm="1">
            			<FontAwesomeIcon icon={faCaretLeft} size="lg" onClick={this.props.onToggle} className="clickable"/>
            		</Col>
            	</Row>
            	<div id="menu-slide-list-slides">
            	{this.props.selectedPatient.map(function(slide, index) {
            		return <Row className="slide-menu-item">
            			<Col sm="2"><div className="thumbnail" /></Col>
            			<Col sm="10" className="slide-name">{slide.slideName}</Col>
            		</Row>;
            	})}
            	</div>
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