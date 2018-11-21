import actionNames from '../../actions/actionNames';

export const selectedPatient = (state = [], action) => {
    switch(action.type) {
        case actionNames.SET_SELECTED_PATIENT:
            return action.payload;
        default:
            return state;
    }
}

export const patients = (state = [], action) => {
    switch(action.type) {
    default:
        return state;
    }
}