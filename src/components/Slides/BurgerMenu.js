import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import MenuSlideListContainer from './MenuSlideListContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretLeft } from '@fortawesome/free-solid-svg-icons';


class BurgerMenu extends Component {
	
	render() {
		return (
			<Menu isOpen={ true } width={ '450px' } noOverlay customBurgerIcon={ <FontAwesomeIcon icon={faBars} size="2x"/> }
				customCrossIcon={ <FontAwesomeIcon icon={faCaretLeft} size="lg"/>} >
				<MenuSlideListContainer />
			</Menu>
		);
	}
	
}

export default BurgerMenu;