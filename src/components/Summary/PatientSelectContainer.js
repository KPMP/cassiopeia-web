import { connect } from 'react-redux';
import PatientSelect from './PatientSelect';
import { setSelectedPatient } from '../../actions/Patients/patientActions'
const mapStateToProps = (state, props) =>
    ({
        patients: state.patients
    });

const mapDispatchToProps = (dispatch, props) =>
    ({
        setSelectedPatient(patient) {
            dispatch(setSelectedPatient(patient));
        }
    });

export default connect(mapStateToProps, mapDispatchToProps)(PatientSelect);