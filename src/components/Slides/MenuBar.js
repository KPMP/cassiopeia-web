import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import { Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const aClassName = "mx-auto";

class MenuBar extends Component {
	render() {
		return(
			<Col sm="2" id="menu-bar">
				<Row>
					<Link className={aClassName}
					to="/">
						<FontAwesomeIcon icon={faHome} size="2x"/>
					</Link>
				</Row>
				<Row>
					<Button color="link" className={aClassName} onClick={this.props.onToggle}>
						<FontAwesomeIcon icon={faBars} size="2x"/>
					</Button>
				</Row>
			</Col>
		);
	}
	
}

export default MenuBar;