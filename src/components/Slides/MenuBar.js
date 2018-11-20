import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'reactstrap';

const aClassName = "mx-auto";

class MenuBar extends Component {

	constructor(props) {
		super(props);
		this.onBarClick = this.onBarClick.bind(this);
	}

    onBarClick() {
		this.props.onToggle();
	}

	render() {
		return(
			<Col sm="2" id="menu-bar">
				<Row>
					<a className={aClassName}
					href="/">
						<FontAwesomeIcon icon={faHome} size="2x"/>
					</a>
				</Row>
				<Row>
					<a className={aClassName} onClick={this.onBarClick}>
						<FontAwesomeIcon icon={faBars} size="2x"/>
					</a>
				</Row>
			</Col>
		);
	}
	
}

export default MenuBar;