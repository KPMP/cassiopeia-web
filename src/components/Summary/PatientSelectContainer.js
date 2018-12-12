import { connect } from 'react-redux';
import PatientSelect from './PatientSelect';
import { getPatientSlides } from '../../actions/Patients/patientActions'
const mapStateToProps = (state, props) =>
    ({
        patients: state.patients
    });

const mapDispatchToProps = (dispatch, props) =>
    ({
        setSelectedPatient(patient) {
            dispatch(getPatientSlides(patient));
        }
    });

export default connect(mapStateToProps, mapDispatchToProps)(PatientSelect);