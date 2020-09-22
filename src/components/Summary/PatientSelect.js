import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PatientListDropDown from './PatientListDropDown';
import ReactGA from 'react-ga';

class PatientSelect extends Component {

    constructor(props) {
        super(props);
        this.state = { patientId: null, buttonDisabled: true }
    }

    handlePatientSelect = (patientId) => {
        ReactGA.event({
            category: 'Navigation',
            action: 'View Slides',
            label: patientId
        });
        this.setState({patientId: patientId});
        this.setState({buttonDisabled: false});
    };

    handleClick = () => {
        this.props.setSelectedParticipant(this.state.patientId);
    };

    componentDidMount() {
        this.props.getAllParticipants();
    }
    
    render() {
        return (
            <div className="patient-select-controls pull-left input-group">
                <PatientListDropDown participants={this.props.participants} handlePatientSelect={this.handlePatientSelect}/>
                <Button color="primary" onClick={this.handleClick} disabled={this.state.buttonDisabled}>View Slides</Button>
            </div>
        );
    }

}

export default PatientSelect;