import actionNames from '../../actions/actionNames';

export const selectedPatient = (state = {}, action) => {
    switch(action.type) {
        case actionNames.SET_SELECTED_PATIENT:
            return action.payload;
        case actionNames.SET_SELECTED_SLIDE:
            return {...state, selectedSlide: action.payload};
        default:
            return state;
    }
}
