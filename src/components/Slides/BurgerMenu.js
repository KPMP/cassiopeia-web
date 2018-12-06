import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import MenuSlideListContainer from './MenuSlideListContainer';


class BurgerMenu extends Component {
	
	render() {
		return (
			<Menu>
				<MenuSlideListContainer />
			</Menu>
		);
	}
	
}

export default BurgerMenu;