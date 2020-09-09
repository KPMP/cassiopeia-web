import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import NavBar from './NavBar'
import { setLoggedIn } from '../../actions/Login/loginActions'
const mapStateToProps = (state, props) =>
    ({
        loggedIn: state.loggedIn
    });

const mapDispatchToProps = (dispatch, props) =>
    ({
        setLoggedIn(loggedIn) {
            dispatch(setLoggedIn(loggedIn));
        }
    });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));