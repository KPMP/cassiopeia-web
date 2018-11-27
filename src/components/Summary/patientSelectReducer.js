import actionNames from '../../actions/actionNames';
import patientSelectSorter from './patientSelectSorter';

export const selectedPatient = (state = [], action) => {
    switch(action.type) {
        case actionNames.SET_SELECTED_PATIENT:
            return patientSelectSorter(action.payload);
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