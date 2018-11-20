import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import MenuBar from './MenuBar';
import MenuSlideList from "./MenuSlideList";

class Menu extends Component {
	render() {
		return(
			<Row id="side-menu">
				<MenuBar />
				<MenuSlideList />
			</Row>
		);
	}
}

export default Menu;