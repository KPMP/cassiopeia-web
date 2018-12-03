import actionNames from '../actionNames';
import axios from 'axios';
import patientSelectSorter from '../../components/Summary/patientSelectSorter';

export const setSelectedPatient = (patient) => {
    return {
        type: actionNames.SET_SELECTED_PATIENT,
        payload: patient
    }
}

export const setSelectedSlide = (slide) => {
	return {
		type: actionNames.SET_SELECTED_SLIDE,
		payload: slide
	}
}

export const getPatientSlides = (patientId) => {
	return (dispatch) => {
		axios.get('/api/v1/slides/' + patientId)
			.then(result => {
				let slides = patientSelectSorter(result.data);
				dispatch(setSelectedPatient({id: patientId, slides: slides, selectedSlide: slides[0]}));
				window.location.href = "/#/slides";
			})
			.catch(err => {
				
			});
	}
}