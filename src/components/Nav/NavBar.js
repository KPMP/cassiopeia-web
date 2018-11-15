import React, { Component } from 'react';
import { Navbar, Row } from 'react-bootstrap';

class NavBar extends Component {
	render() {
		return (
			<Row className="nav-container container-fluid">
				<Navbar.Header>
					<Navbar.Brand>
						<a href="/">
							<img src="img/kpmp-logo-trans-small.png" alt="Patient Slide Viewer" className="logo navbar-brand"/>
						</a>
					</Navbar.Brand>
				</Navbar.Header>
			</Row>
			
		);
	}
}

export default NavBar;