import React, { Component } from 'react';
import { Row, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {
	render() {
		return (
			<Row className="nav-container container-fluid">
				<NavbarBrand tag={Link} to={'/'}>
					<img src="img/kpmp-logo-trans-small.png" alt="Patient Slide Viewer" className="logo"/>
				</NavbarBrand>
			</Row>
			
		);
	}
}

export default NavBar;