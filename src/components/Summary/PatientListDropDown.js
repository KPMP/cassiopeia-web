import React, { Component } from 'react';
import Select from 'react-select';

class PatientListDropDown extends Component {

    constructor(props) {
        super(props);
        this.state = { selectedOption: null }
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption: selectedOption});
    };

    render() {
        let {selectedOption} = this.props;
        let options = this.props.patientIds.map((patientId) => {
                return {value: patientId, label: patientId}
            }
        );
        return (
            <Select className="patient-select" value={selectedOption} onChange={this.handleChange} options={options} placeholder="Select a KPMP ID"/>
        );
    }

}

export default PatientListDropDown;
