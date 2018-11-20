import React, { Component } from 'react';
import { Collapse, Row } from 'reactstrap';
import MenuBar from './MenuBar';
import MenuSlideList from "./MenuSlideList";

class Menu extends Component {

	constructor(props) {
		super(props);
		this.toggleHandler = this.toggleHandler.bind(this);
		this.state = {
			collapse: false
		};
	}

	toggleHandler() {
		this.setState({collapse: !this.state.collapse} );
	}

	render() {
		return(
			<Row id="side-menu">
				<MenuBar onToggle={this.toggleHandler}/>
				<Collapse navbar isOpen={this.state.collapse}>
					<MenuSlideList />
				</Collapse>
			</Row>
		);
	}
}

export default Menu;