import actionNames from './actionNames';

export const resetState = () => {
    return {
        type: actionNames.RESET_STATE,
        payload: undefined
    }
}