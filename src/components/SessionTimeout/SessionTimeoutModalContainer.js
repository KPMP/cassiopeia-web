import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SessionTimeoutModal from './SessionTimeoutModal';
import { sessionTimedOut } from '../../actions/SessionTimeout/sessionTimeoutAction';
import { resetState } from '../../actions/resetStateAction';

const mapStateToProps = (state, props) =>
    ({
        sessionIsTimedOut: state.sessionTimedOut
    });

const mapDispatchToProps = (dispatch, props) =>
    ({
        startTimer(){
            startTimer(dispatch);
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

export const startTimer = (dispatch) => {
    clearTimeout();
    setTimeout(function() {
        dispatch(sessionTimedOut(true));
    }, 5 * 60 * 1000);
}