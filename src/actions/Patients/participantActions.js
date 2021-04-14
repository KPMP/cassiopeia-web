import actionNames from '../actionNames';
import axios from 'axios';
import { sendMessageToBackend }  from '../Error/errorActions';

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

export const getParticipantSlides = (history) => {
	return (dispatch) => {
		axios.get('/api/v1/slides/')
		.then(result => {
			let slides = result.data;
			if (slides.length === 0) {
				history.push("/about");
			} else {
				dispatch(setSelectedPatient({id: "", slides: slides, selectedSlide: slides[0]}));
				history.push("/slides");
			}
		})
		.catch(err => {
			console.log("unable to retrieve slides for participant: " + err);
			dispatch(sendMessageToBackend(err));
		});
	}
}
