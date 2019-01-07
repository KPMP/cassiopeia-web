import { connect } from 'react-redux';
import PatientSelect from './PatientSelect';
import { withRouter } from 'react-router';
import { getPatientSlides } from '../../actions/Patients/patientActions'
const mapStateToProps = (state, props) =>
    ({
        patients: state.patients
    });

const mapDispatchToProps = (dispatch, props) =>
    ({
        setSelectedPatient(patient) {
            dispatch(getPatientSlides(patient));
            dispatch(() => props.history.push('/slides'));
        }
    });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PatientSelect));