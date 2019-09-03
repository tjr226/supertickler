import {
    LOGIN_SUCCESS, LOGIN_START, LOGIN_FAILURE,
    SIGNUP_SUCCESS, SIGNUP_START, SIGNUP_FAILURE,
} from '../actions';


const authInitialState = {
    loggingIn: false,
    error: null
};

export const authReducer = (state = authInitialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                loggingIn: true,
                error: null,
            };
        case LOGIN_SUCCESS:
            return {
                loggingIn: false,
                error: null,
            }
        case LOGIN_FAILURE:
            return {
                loggingIn: true,
                error: null
            }
        default:
            return state;
    }
}