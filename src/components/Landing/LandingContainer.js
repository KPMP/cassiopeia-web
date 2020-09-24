import { connect } from 'react-redux';
import Landing from './Landing';
import { getParticipantSlides } from '../../actions/Patients/participantActions';

const mapStateToProps = (state, props) =>
    ({
    });

const mapDispatchToProps = (dispatch, props) =>
    ({
    	getParticipantSlides() {
    		dispatch(getParticipantSlides(props));
    	}
    });

export default connect(mapStateToProps, mapDispatchToProps)(Landing);