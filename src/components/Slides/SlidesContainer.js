import { connect } from 'react-redux';
import Slides from './Slides';
const mapStateToProps = (state, props) =>
    ({
        selectedPatient: state.selectedPatient
    });

const mapDispatchToProps = (dispatch, props) =>
    ({
    });

export default connect(mapStateToProps, mapDispatchToProps)(Slides);