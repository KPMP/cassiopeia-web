import actionNames from '../actionNames';

export const sessionTimedOut = (isTimedOut) => {
    return {
        type: actionNames.SET_SESSION_TIMED_OUT,
        payload: isTimedOut
    }
}