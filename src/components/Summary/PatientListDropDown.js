import React, { Component } from 'react';
import Select from 'react-select';

class PatientListDropDown extends Component {

    constructor(props) {
        super(props);
        this.state = { selectedOption: null }
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption: selectedOption});
        this.props.handlePatientSelect(selectedOption.value);
    };

    render() {
        let { selectedOption, patients } = this.props;
        let options = patients.map((patient) => {
                return {value: patient.id, label: patient.label}
            }
        );
        return (
            <Select className="patient-select" value={selectedOption} onChange={this.handleChange} options={options} placeholder="Select a KPMP ID"/>
        );
    }

}

export default PatientListDropDown;
