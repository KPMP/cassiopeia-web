import React, { Component } from 'react';
import PatientSelectContainer from './PatientSelectContainer';

class Summary extends Component {
    render() {
        let patientIds = ["17-1606", "18-139", "18-142", "18-162", "18-312", "18-342"];
        return (
            <div id="landing-page">
                <div>
                    <PatientSelectContainer />
                </div>
                <div>
                    Landing Page Content
                </div>
            </div>
        );
    }
}

export default Summary;
