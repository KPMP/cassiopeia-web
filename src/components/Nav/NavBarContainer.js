import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import NavBar from './NavBar'
import { resetState } from '../../actions/resetStateAction';

const mapStateToProps = (state, props) =>
    ({
    });

const mapDispatchToProps = (dispatch, props) =>
    ({
        resetState () {
            dispatch(resetState());
        }
    });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));