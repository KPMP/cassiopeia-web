import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import PatientListDropDown from './PatientListDropDown';

class PatientSelect extends Component {

    constructor(props) {
        super(props);
        this.state = { patientId: null }
    }

    handlePatientSelect = (patientId) => {
        this.setState({patientId: patientId});
    };

    handleClick = () => {
        this.props.setSelectedPatient(this.state.patientId)
    };

    render() {
        return (
            <div className="patient-select-controls pull-left input-group">
                <PatientListDropDown patients={this.props.patients} handlePatientSelect={this.handlePatientSelect}/>
                <Button bsStyle="primary" onClick={this.handleClick}>View Slides</Button>
            </div>
        );
    }

}

export default PatientSelect;