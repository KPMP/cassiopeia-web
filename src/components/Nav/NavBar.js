import React, { Component } from 'react';
import { NavbarBrand, Button } from 'reactstrap';

class NavBar extends Component {

	handleLogout = () => {
		this.props.setLoggedIn(false)
	};

	handleLogin= () => {
		this.props.setLoggedIn(true)
	};

	render() {
		return (
			<nav id="navbar" className="nav-container fixed-top navbar navbar-expand-* px-4 py-2">
				<NavbarBrand d-flex align-items-center className="ml-3" href="/">
					<img src="img/logo.png" className="logo" alt="Participant Slide Viewer"/>
					<span id="title-text" className="ml-4">Participant Portal</span>
				</NavbarBrand>
				<ul className="navbar-nav">
					{ this.props.loggedIn ?
						<li className="nav-item small">
							About &nbsp;|&nbsp; <a onClick={this.handleLogout}>Sign Out</a>
						</li> : <Button color="primary" className="px-5" onClick={this.handleLogin}>SIGN IN</Button>
					}
				</ul>
			</nav>
		);
	}
}

export default NavBar;