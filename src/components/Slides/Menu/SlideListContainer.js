import { connect } from 'react-redux';
import SlideList from './SlideList';
import { setSelectedSlide } from '../../../actions/Patients/participantActions';
import { startTimer } from '../../../actions/SessionTimeout/sessionTimeoutAction';

const mapStateToProps = (state, props) =>
    ({
        selectedPatient: state.selectedPatient
    });

const mapDispatchToProps = (dispatch, props) =>
    ({
        setSelectedSlide(slide) {
            dispatch(setSelectedSlide(slide));
            startTimer(dispatch);
        }
    });

export default connect(mapStateToProps, mapDispatchToProps)(SlideList);