import { combineReducers } from 'redux';
import actionNames from './actions/actionNames';
import loadedState from './initialState';
import { selectedPatient } from './components/Slides/patientSelectReducer';

const appReducer = combineReducers({
    selectedPatient,
    loggedIn
});

const rootReducer = (state, action) => {
    if(action.type === actionNames.RESET_STATE) {
        state = loadedState;
    }
    return appReducer(state, action);
}

export default rootReducer;
