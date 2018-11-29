import { connect } from 'react-redux';
import SlideViewer from './SlideViewer';

const mapStateToProps = (state, props) =>
    ({
        selectedPatient: state.selectedPatient
    });

const mapDispatchToProps = (dispatch, props) =>
    ({

    });

export default connect(mapStateToProps, mapDispatchToProps)(SlideViewer);