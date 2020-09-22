import axios from 'axios';

export const sendMessageToBackend = (error) => {

		let errorMessage = { error: error.message , stackTrace: error.stack };
		return (dispatch) => {
			axios.post('/api/v1/error', errorMessage);
		};
};
