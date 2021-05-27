import React, { Component } from 'react';
import { NavbarBrand, Button } from 'reactstrap'
import { Link } from 'react-router-dom';

class NavBar extends Component {

	signOut = () => {
		this.props.resetState();
		window.location.href = 'https://dev-mydata.kpmp.org/Shibboleth.sso/Logout?return=https://login.dev-mydata.kpmp.org/idp/profile/Logout';
	}

	render() {
		let activePage = this.props.location.pathname
		let className = '';
		if (activePage === '/help') {
			className= 'active';
		}
		return (
			<nav id='navbar' className='nav-container fixed-top navbar navbar-expand-* px-4 py-2'>
				<Link to='/' className='navbar-header'>
					<NavbarBrand className='d-flex align-items-center ml-3'>
						<img src='img/logo.png' className='logo' alt='Participant Slide Viewer'/>
						<span id='title-text' className='ml-4'>Participant Portal</span>
					</NavbarBrand>
				</Link>
				<ul className='navbar-nav'>
						<li className='nav-item small'>
							<a className={className} href='/help'>
								<span class="nav-text px-1">Help</span>
							</a> &nbsp;|&nbsp; 
							<a color='link'>
								<span class="nav-text px-1" onClick={this.signOut}>Sign Out</span>
							</a>
						</li>
				</ul>
			</nav>
		);
	}
}

export default NavBar;