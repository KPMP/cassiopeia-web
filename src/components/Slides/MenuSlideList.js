import React, { Component } from 'react';
import { Card, CardBody, CardSubtitle, CardTitle, Col, Row } from 'reactstrap';

class MenuSlideList extends Component {
    render() {
        return (
            <Col id="menu-slide-list">
                <Row>Slide List Item 1</Row>
                <Row>Slide List Item 2</Row>
                <Row>Slide List Item 3</Row>
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