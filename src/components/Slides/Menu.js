import React, { Component } from 'react';
import { Row } from 'reactstrap';
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
		this.setState({
			collapse: !this.state.collapse
		} );
	}

	render() {
		console.log(this.props.selectedPatient);
		return(
			<Row id="side-menu">
				<MenuBar onToggle={this.toggleHandler}/>
				{ this.state.collapse ? null : <MenuSlideList /> }
			</Row>
		);
	}
}

export default Menu;
