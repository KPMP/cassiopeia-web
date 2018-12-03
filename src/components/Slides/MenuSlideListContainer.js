import { connect } from 'react-redux';
import MenuSlideList from './MenuSlideList';
import { setSelectedSlide } from '../../actions/Patients/patientActions';

const mapStateToProps = (state, props) =>
    ({
        selectedPatient: state.selectedPatient
    });

const mapDispatchToProps = (dispatch, props) =>
    ({
        setSelectedSlide(slide) {
            dispatch(setSelectedSlide(slide))
        }
    });

export default connect(mapStateToProps, mapDispatchToProps)(MenuSlideList);