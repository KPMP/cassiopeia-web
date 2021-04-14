import axios from 'axios';

export const handleError = (statusCode) => {
	return (dispatch) => {
		window.location.href = '/errorPage';
	}
};

export const sendMessageToBackend = (error) => {
	if (error.response && error.response.status && error.response.status >= 400) {
		return (dispatch) => {
			let href = window.location.href;
			if (!href.includes('/errorPage')) {
				dispatch(handleError(error.response.status));
			}
		}
	} else {
		console.log(error)
		let errorMessage = { error: error.message , stackTrace: error.stack };
		return (dispatch) => {
			axios.post('/api/v1/error', errorMessage)
				.then((res) => {
					dispatch(handleError(error.response.status));
				});
		};
	}
};
