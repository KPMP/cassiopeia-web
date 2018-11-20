import actionNames from '../actionNames';
import Api from '../../helpers/Api';

const api = Api.getInstance();


export const setSelectedPatient = (patient) => {
    return {
        type: actionNames.SET_SELECTED_PATIENT,
        payload: patient
    }
}

export const getPatientSlides = (patientId) => {
	return (dispatch) => {
		api.get('/api/v1/slides/' + patientId)
			.then(result => {
				console.log(result.data);
				setSelectedPatient(result.data);
			})
			.catch(err => {
				
			});
	}
}