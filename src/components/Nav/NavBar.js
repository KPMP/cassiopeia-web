import React, { Component } from 'react';
import { NavbarBrand, Button } from 'reactstrap';

class NavBar extends Component {

	render() {
		return (
			<nav id="navbar" className="nav-container fixed-top navbar navbar-expand-* px-4 py-2">
				<NavbarBrand className="d-flex align-items-center ml-3">
					<img src="img/logo.png" className="logo" alt="Participant Slide Viewer"/>
					<span id="title-text" className="ml-4">Participant Portal</span>
				</NavbarBrand>
				<ul className="navbar-nav">
						<li className="nav-item small">
							<Button color="link" onClick={() => window.location.href="/about"}>About</Button> &nbsp;|&nbsp; 
							<Button color="link" onClick={() => window.location.href="https://login.dev-mydata.kpmp.org/idp/Shibboleth.sso/Logout"}>Sign Out</Button>
						</li>
				</ul>
			</nav>
		);
	}
}

export default NavBar;