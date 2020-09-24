import React, { Component } from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import SlideListContainer from './SlideListContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
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
				<BurgerMenu id={ "bm-menu-wrap" } width={"33%"} isOpen={ this.state.isOpen } noOverlay customBurgerIcon={ <div><FontAwesomeIcon size="lg" icon={faCaretRight} /></div> }
					customCrossIcon={ false } >
					<SlideListContainer toggleMenu={this.toggleMenu}/>
					<StainInformationContainer />
				</BurgerMenu>
            </div>
		);
	}
	
}

export default Menu;