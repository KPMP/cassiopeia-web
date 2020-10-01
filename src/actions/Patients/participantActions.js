import actionNames from '../actionNames';
import axios from 'axios';
import patientSelectSorter from '../../components/Summary/patientSelectSorter';
import { sendMessageToBackend }  from '../Error/errorActions';

export const setSelectedPatient = (patient) => {
    return {
        type: actionNames.SET_SELECTED_PATIENT,
        payload: patient
    }
}

export const setParticipants = (participants) => {
	return {
		type: actionNames.SET_PARTICIPANTS,
		payload: participants
	}
}

export const setSelectedSlide = (slide) => {
	return {
		type: actionNames.SET_SELECTED_SLIDE,
		payload: slide
	}
}


export const getParticipantSlidesWithId = (patientId, props) => {
	return (dispatch) => {
		axios.get('/api/v1/slides/' + patientId)
			.then(result => {
				let slides = patientSelectSorter(result.data);
				dispatch(setSelectedPatient({id: patientId, slides: slides, selectedSlide: slides[0]}));
				props.history.push("/slides");
			})
			.catch(err => {
				console.log("unable to retrieve slides for participant: " + patientId);
				dispatch(sendMessageToBackend(err));
			});
	}
}

export const getParticipantSlides = (props) => {
	return (dispatch) => {
		axios.get('/api/v1/slides/')
		.then(result => {
			let slides = patientSelectSorter(result.data);
			if (slides.length === 0) {
				props.history.push("/about");
			} else {
				dispatch(setSelectedPatient({id: "", slides: slides, selectedSlide: slides[0]}));
				props.history.push("/slides");
			}
		})
		.catch(err => {
			console.log("unable to retrieve slides for participant: " + err);
			props.history.push("/login");
		});
	}
}

export const getAllParticipants = () => {
	return (dispatch) => {
		var config = { headers: {'Content-Type': 'application/json', 'Cache-control': 'no-cache'}}
		axios.get('/api/v1/slides/summary', config)
			.then(result => {
				let participants = result.data;
				dispatch(setParticipants(participants));
			})
			.catch(err => {
				console.log("We were unable to get the slides.");
				dispatch(sendMessageToBackend(err));
			});
	}
}