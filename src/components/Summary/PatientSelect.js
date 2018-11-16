import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import PatientListDropDown from './PatientListDropDown';

class PatientSelect extends Component {

    render() {
        return (
            <div className="patient-select-controls pull-left input-group">
                <PatientListDropDown patients={this.props.patients} setSelectedPatient={this.props.setSelectedPatient}/>
                <Button bsStyle="primary">View Slides</Button>
            </div>
        );
    }

}

export default PatientSelect;