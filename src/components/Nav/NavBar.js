import React, { Component } from 'react';
import { NavbarBrand } from 'reactstrap';

class NavBar extends Component {
	render() {
		return (
			<nav id="navbar" className="nav-container fixed-top navbar navbar-expand-* px-4 py-2">
				<NavbarBrand d-flex align-items-center href="/">
					<img src="img/logo.png" className="logo" alt="Participant Slide Viewer"/>
					<span id="title-text" className="ml-4">Participant Portal</span>
				</NavbarBrand>
				<ul className="navbar-nav">
					<li className="nav-item small">
						About &nbsp;|&nbsp; Sign Out
					</li>
				</ul>
			</nav>
		);
	}
}

export default NavBar;