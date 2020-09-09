import actionNames from "../../actions/actionNames";

export const loggedIn = (state = "", action) => {
    let newState = "";
    let loggedIn = action.payload;
    switch(action.type) {
        case actionNames.SET_LOGGED_IN:
            newState = loggedIn;
            return newState;
        default:
            return state;
    }
}
