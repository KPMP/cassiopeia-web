import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import MenuSidebar from './MenuSidebar';

class Menu extends Component {
	render() {
		return(
			<Row id="side-menu">
				<Col sm="2">
					<MenuSidebar/>
				</Col>
				<Col sm="3">
						{this.props.selectedPatient}
				</Col>
			</Row>
		);
	}
}

export default Menu;