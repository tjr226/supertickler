import { 
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
    REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE,
    FETCH_TASKS_START, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE,
} from '../Actions/index.js';

const initialAuthState = {
    loggingIn: false,
    registering: false,
    fetchingTasks: false,
    fetchedTaskList: [],
    token: '',
    error: null,
};

export const authreducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                error: '',
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                token: action.payload,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                error: action.payload,
                token: ''
            }
        case REGISTER_START:
            return {
                ...state,
                registering: true,
                error: '',
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                registering: false,
                token: action.payload,
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                registering: false,
                error: action.payload,
                token: '',
            }
        case FETCH_TASKS_START:
            console.log("fetching tasks payload", action.payload)
            return {
                ...state,
                fetchingTasks: true,
                error: ''
            }
        case FETCH_TASKS_SUCCESS:
            return {
                ...state,
                fetchingTasks: false,
                error: '',
                fetchedTaskList: action.payload
            }
        case FETCH_TASKS_FAILURE:
            return {
                ...state,
                fetchingTasks: false,
                error: action.payload
            }
        default:
            return state;
    }
}