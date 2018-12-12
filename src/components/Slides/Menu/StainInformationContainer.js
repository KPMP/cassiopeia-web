import { connect } from 'react-redux';
import StainInformation from './StainInformation';

const mapStateToProps = (state, props) =>
    ({
        selectedPatient: state.selectedPatient
    });

const mapDispatchToProps = (dispatch, props) =>
    ({
    });

export default connect(mapStateToProps, mapDispatchToProps)(StainInformation);