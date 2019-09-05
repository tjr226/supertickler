import { combineReducers } from 'redux';
import { taskreducer } from './taskreducer';
import { authreducer } from './authreducer';

export default combineReducers({
    taskreducer, authreducer
});

