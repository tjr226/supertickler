import { 
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
    FETCH_TASKS_START, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE,
} from '../Actions/index.js';

const initialAuthState = {
    loggingIn: false,
    fetchingTasks: false,
    fetchedTaskList: [],
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
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                error: action.payload
            }
        case FETCH_TASKS_START:
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