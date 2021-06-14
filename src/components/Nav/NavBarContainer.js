import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import NavBar from './NavBar'

const mapStateToProps = (state, props) =>
    ({
    });

const mapDispatchToProps = (dispatch, props) =>
    ({

    });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));