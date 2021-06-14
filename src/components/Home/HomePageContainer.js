import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import HomePage from './HomePage'
import {getParticipantSlides} from '../../actions/Patients/participantActions';
const mapStateToProps = (state, props) =>
    ({
    });

const mapDispatchToProps = (dispatch, props) =>
    ({
        getParticipantSlides() {
            dispatch(getParticipantSlides(props));
        }
    });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));