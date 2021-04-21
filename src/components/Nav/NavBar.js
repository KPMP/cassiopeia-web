import React, { Component } from 'react';
import { NavbarBrand, Button } from 'reactstrap'
import { Link } from 'react-router-dom';

class NavBar extends Component {

	render() {
		let activePage = this.props.location.pathname
		let className = '';
		if (activePage === '/about') {
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
							<Button color='link' className={className} onClick={() => window.location.href='/about'}>About</Button> &nbsp;|&nbsp; 
							<Button color='link' onClick={() => window.location.href='https://dev-mydata.kpmp.org/Shiboleth.sso/Logout?return=https://login.dev-mydata.kpmp.org/idp/profile/Logout'}>Sign Out</Button>
						</li>
				</ul>
			</nav>
		);
	}
}

export default NavBar;