import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import MenuSlideListContainer from './MenuSlideListContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretLeft, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class BurgerMenu extends Component {
	
	render() {
		return (
			<div>
				<Menu isOpen={ true } width={ '450px' } noOverlay customBurgerIcon={ <FontAwesomeIcon icon={faBars} /> }
					customCrossIcon={ <FontAwesomeIcon icon={faCaretLeft} size="lg"/>} >
					<MenuSlideListContainer />
				</Menu>
                <Link id="btn-home" to="/">
                    <FontAwesomeIcon icon={faHome} size="2x"/>
                </Link>
            </div>
		);
	}
	
}

export default BurgerMenu;