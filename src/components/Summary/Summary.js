import React, { Component } from 'react';
import PatientSelectContainer from './PatientSelectContainer';

class Summary extends Component {
    render() {
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
