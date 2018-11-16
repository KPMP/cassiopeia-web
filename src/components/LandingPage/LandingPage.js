import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import PatientListDropDown from './PatientListDropDown.js';

class LandingPage extends Component {
    render() {
        let patientIds = ["17-1606", "18-139", "18-142", "18-162", "18-312", "18-342"];
        return (
            <div id="landing-page">
                <div className="patient-select-controls pull-left input-group">
                    <PatientListDropDown patientIds={patientIds} />
                    <Button bsStyle="primary">View Slides</Button>
                </div>
            <div>
                    </div>
                </div>
        );
    }
}

export default LandingPage;
