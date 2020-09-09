import actionNames from "../actionNames";

export const setLoggedIn = (loggedIn) => {
    return {
        type: actionNames.SET_LOGGED_IN,
        payload: loggedIn
    }
}