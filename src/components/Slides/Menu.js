import React, { Component } from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import MenuSlideListContainer from './MenuSlideListContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import MenuHeaderContainer from './MenuHeaderContainer';

class Menu extends Component {
	
	constructor(props) {
		super(props);
		this.state = { isOpen: true };
	}
	
	toggleMenu = () => {
		let openState = !this.state.isOpen;
		this.setState( { isOpen: openState } );
	}
	
	render() {
		return (
			<div id="side-menu">
				<BurgerMenu isOpen={ this.state.isOpen } width={ '450px' } noOverlay customBurgerIcon={ <FontAwesomeIcon icon={faBars} /> }
					customCrossIcon={ false } >
					<MenuHeaderContainer toggleMenu={this.toggleMenu}/>
					<MenuSlideListContainer />
				</BurgerMenu>
                <Link id="btn-home" to="/">
                    <FontAwesomeIcon icon={faHome} size="2x"/>
                </Link>
            </div>
		);
	}
	
}

export default Menu;