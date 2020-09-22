import { setSelectedPatient } from './patientActions';
import actionNames from '../actionNames';


describe('setSelectedPatient', () => {
	it('should pass the argument through to the payload and set the action', () => {
		let payload = "I am a payload";
		let actionName = actionNames.SET_SELECTED_PATIENT;
		
		let result = setSelectedPatient(payload);
		
		expect(result).toEqual( { payload: payload, type: actionName });
	});
});

