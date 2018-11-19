import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

class MenuSidebar extends Component {
	render() {
		return(
			<div id="menu-sidebar"> <a href="/"><FontAwesomeIcon icon={faHome} size="2x"/> </a></div>
		);
	}
	
}

export default MenuSidebar;