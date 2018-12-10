import React, { Component } from 'react';
import { Row, NavbarBrand } from 'reactstrap';

class NavBar extends Component {
	render() {
		return (
			<Row className="nav-container container-fluid">
				<NavbarBrand href="/">
					<img src="img/logo.png" alt="Patient Slide Viewer" className="logo"/>
				</NavbarBrand>
			</Row>
			
		);
	}
}

export default NavBar;