import { connect } from 'react-redux';
import Slides from './Slides';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, props) =>
({
	slides: state.selectedPatient.slides
});

const mapDispatchToProps = (dispatch, props) =>
({
	
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Slides));