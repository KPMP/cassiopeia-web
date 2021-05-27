import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SessionTimeoutModal from './SessionTimeoutModal';
import { resetState } from '../../actions/resetStateAction';
import { sessionTimedOut, startTimer } from '../../actions/SessionTimeout/sessionTimeoutAction';

const mapStateToProps = (state, props) =>
    ({
        sessionIsTimedOut: state.sessionTimedOut
    });

const mapDispatchToProps = (dispatch, props) =>
    ({
        clearState() {
            dispatch(resetState());
        },
        restartTimer() {
            dispatch(sessionTimedOut(false));
            startTimer(dispatch);
        },
        sessionTimedOut(isTimedOut) {
            dispatch(sessionTimedOut(isTimedOut));
            if (isTimedOut) {
                dispatch(resetState());
            }
        }
    });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionTimeoutModal));
