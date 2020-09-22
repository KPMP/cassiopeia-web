import { connect } from 'react-redux';
import PatientSelect from './PatientSelect';
import { withRouter } from 'react-router';
import { getParticipantSlidesWithId, getAllParticipants } from '../../actions/Patients/participantActions'
const mapStateToProps = (state, props) =>
    ({
    	 participants: state.participants
    });

const mapDispatchToProps = (dispatch, props) =>
    ({
        setSelectedParticipant(participant) {
            dispatch(getParticipantSlidesWithId(participant, props));
        },
        getAllParticipants() {
            dispatch(getAllParticipants());
        }
    });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PatientSelect));