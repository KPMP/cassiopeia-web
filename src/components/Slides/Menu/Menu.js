import React, { Component } from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import SlideListContainer from './SlideListContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import StainInformationContainer from './StainInformationContainer';

class Menu extends Component {
	
	constructor(props) {
		super(props);
		this.state = { isOpen: true };
	}
	
	toggleMenu = (newState) => {
		let openState = !this.state.isOpen;
		if (newState !== undefined || newState !== null) {
			openState = newState;
		}
		this.setState( { isOpen: openState } );
	}
	
	render() {
		return (
			<div id="side-menu">
				<BurgerMenu isOpen={ this.state.isOpen } width={ '450px' } noOverlay customBurgerIcon={ <FontAwesomeIcon icon={faBars} /> }
					customCrossIcon={ false } >
					<SlideListContainer toggleMenu={this.toggleMenu}/>
					<StainInformationContainer />
				</BurgerMenu>
                <Link id="btn-home" to="/">
                    <FontAwesomeIcon icon={faHome} size="2x"/>
                </Link>
            </div>
		);
	}
	
}

export default Menu;