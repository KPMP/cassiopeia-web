import { connect } from 'react-redux';
import PatientSelect from './PatientSelect';
import { setSelectedPatient } from '../../actions/Patients/patientActions'
const mapStateToProps = (state, props) =>
    ({
        selectedPatient: state.selectedPatient
    });

const mapDispatchToProps = (dispatch, props) =>
    ({

    });

export default connect(mapStateToProps, mapDispatchToProps)(SlidesContainer);