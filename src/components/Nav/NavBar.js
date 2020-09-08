import React, { Component } from 'react';
import { Row, NavbarBrand, Container } from 'reactstrap';

class NavBar extends Component {
	render() {
		return (
			<Container fluid>
			<Row className="nav-container container-fluid">
				<NavbarBrand href="/">
					<img src="img/logo.png" alt="Participant Slide Viewer" className="logo"/>
				</NavbarBrand>
			</Row>
			</Container>
		);
	}
}

export default NavBar;