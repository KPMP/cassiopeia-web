import { combineReducers } from 'redux';
import actionNames from './actions/actionNames';
import loadedState from './initialState';
import { selectedPatient } from './components/Slides/patientSelectReducer';
import { sessionTimedOut } from './components/SessionTimeout/sessionTimeoutReducer';

const appReducer = combineReducers({
    selectedPatient,
    sessionTimedOut
});

const rootReducer = (state, action) => {
    if(action.type === actionNames.RESET_STATE) {
        state = loadedState;
    }
    return appReducer(state, action);
}

export default rootReducer;
