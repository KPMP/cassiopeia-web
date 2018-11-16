import actionNames from '../../actions/actionNames';

export const selectedPatient = (state = {}, action) => {
    let newState = {...state};
    switch(action.type) {
        case actionNames.SET_SELECTED_PATIENT:
            newState = action.payload;
            return newState;
        default:
            return state;
    }
}

export const patients = (state = [], action) => {
    let newState = {...state};
    switch(action.type) {
    default:
        return state;
    }
}