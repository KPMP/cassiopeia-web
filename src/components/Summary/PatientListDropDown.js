import React, { Component } from 'react';
import { Select } from 'antd';
import 'antd/es/select/style/index.css';

class PatientListDropDown extends Component {

    handleChange = (selectedOption) => {
        this.props.handlePatientSelect(selectedOption.key);
    };

    render() {
        const Option = Select.Option
    	let { patients } = this.props;
        let options = patients.map((patient) => {
                return <Option value={patient.id}>{patient.label}</Option>
            }
        );
        return (
	        	<Select size="large" className="patient-select-dropdown" labelInValue defaultValue={{ key: 'Select a KPMP ID' }} onChange={this.handleChange} 
	        		placeholder="Select a KPMP ID" getPopupContainer={() => document.getElementById("patient-select-wrapper")}>
	        		{options}
	        	</Select>
        );
    }

}

export default PatientListDropDown;
