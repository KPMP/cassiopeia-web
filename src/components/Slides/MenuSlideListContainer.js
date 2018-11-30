import { connect } from 'react-redux';
import MenuSlideList from './MenuSlideList';
import { setSelectedSlide } from '../../actions/Patients/patientActions';

const mapStateToProps = (state, props) =>
    ({
        selectedPatient: state.selectedPatient
    });

const mapDispatchToProps = (dispatch, props) =>
    ({
        setSelectedSlide(slideId) {
            dispatch(setSelectedSlide(slideId))
        }
    });

export default connect(mapStateToProps, mapDispatchToProps)(MenuSlideList);