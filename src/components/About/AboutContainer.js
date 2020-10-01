import { connect } from 'react-redux';
import About from './About';
import { withRouter } from 'react-router-dom';
import { getParticipantSlides } from '../../actions/Patients/participantActions';

const mapStateToProps = (state, props) =>
({
	slides: state.selectedPatient.slides
});

const mapDispatchToProps = (dispatch, props) =>
({
	getParticipantSlides() {
		dispatch(getParticipantSlides(props));
	}
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About));