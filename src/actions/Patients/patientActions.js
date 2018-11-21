import actionNames from '../actionNames';
import axios from 'axios';

export const setSelectedPatient = (patient) => {
    return {
        type: actionNames.SET_SELECTED_PATIENT,
        payload: patient
    }
}

export const getPatientSlides = (patientId) => {
	return (dispatch) => {
		axios.get('/api/v1/slides/' + patientId)
			.then(result => {
				dispatch(setSelectedPatient(result.data));
				window.location.href = "/#/slides";
			})
			.catch(err => {
				
			});
	}
}