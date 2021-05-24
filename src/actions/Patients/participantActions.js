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

export const getParticipantSlides = (props) => {
	return (dispatch) => {
		axios.get('/api/v1/slides/')
		.then(result => {
			let slides = result.data;
			if (slides.length === 0) {
				sleep(1000).then(() => {
					props.history.push("/help");
				});
			} else {
				dispatch(setSelectedPatient({id: "", slides: slides, selectedSlide: slides[0]}));
				sleep(1000).then(() => {
					props.history.push("/slides");
				});
			}
		})
		.catch(err => {
			console.log("unable to retrieve slides for participant: " + err);
			dispatch(sendMessageToBackend(err));
		});
	}
}

const sleep = (milliseconds) => {
	return new Promise(resolve => setTimeout(resolve, milliseconds));
}