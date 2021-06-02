// import React, { Component } from 'react';
import { NavbarBrand, Collapse, Navbar, NavbarToggler, Nav, NavItem, Container, NavLink, NavbarText } from 'reactstrap';
import React, { useState } from 'react';

const NavBar = (props) => {
	const [isOpen, setIsOpen] = useState(false);
  
	const toggle = () => setIsOpen(!isOpen);
  
	return (
	  <Container>
		<Navbar id="navbar" className="fixed-top px-1 py-1 mb-3 container-fluid" expand="md" light>
			<NavbarBrand href='/' className='ml-2 text-dark d-flex align-items-center'>
				<img src='img/logo.png' className='logo' alt='Participant Slide Viewer'/>
				<span id='title-text' className='ml-4'>Participant Portal</span>
			</NavbarBrand>
		  <NavbarToggler onClick={toggle} />
		  <Collapse isOpen={isOpen} navbar>
			<Nav className="ml-auto" navbar>
				<NavItem className={`${window.location.pathname.replaceAll("/", "") === 'help' ? 'active' : ''} px-1`}>
					<NavLink href='/help'>Help</NavLink>
				</NavItem>
				<NavItem className='px-1'>
					<NavLink href='https://dev-mydata.kpmp.org/Shibboleth.sso/Logout?return=https://login.dev-mydata.kpmp.org/idp/profile/Logout'>Sign Out</NavLink>
				</NavItem>
			</Nav>
		  </Collapse>
		</Navbar>
	  </Container>
	);
}
  
export default NavBar;