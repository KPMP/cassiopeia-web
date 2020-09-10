import { connect } from 'react-redux';
import PatientSelect from './PatientSelect';
import { withRouter } from 'react-router';
import { getPatientSlides, getAllParticipants } from '../../actions/Patients/patientActions'
const mapStateToProps = (state, props) =>
    ({
    	 participants: state.participants
    });

const mapDispatchToProps = (dispatch, props) =>
    ({
        setSelectedPatient(patient) {
            dispatch(getPatientSlides(patient, props));
        },
        getAllParticipants() {
            dispatch(getAllParticipants());
        }
    });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PatientSelect));