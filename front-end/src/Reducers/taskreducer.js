import { ADD_TASK, COMPLETE_TASK, HIDE_TASK, HIDE_TASK_WEEK, HIDE_TASK_MONTH, HIDE_TASK_YEAR, HIDE_ALL_TASKS, SHOW_ALL_TASKS } from '../Actions';
import moment from 'moment';

const initialState = {
    potentialTaskList: [
        { task_text: "Task One", id: 0, completed_boolean: 0, hidden_boolean: 0, unix_timestamp: moment().format('x') },
        { task_text: "TaskTwo", id: 1, completed_boolean: 0, hidden_boolean: 0, unix_timestamp: moment().add(1, 'days').format('x') }
    ],
    nextID: 2
}

export const taskreducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK:
            return {
                potentialTaskList: [...state.potentialTaskList, {
                    task_text: action.payload.task_text,
                    id: state.nextID,
                    completed_boolean: 0,
                    hidden_boolean: 0,
                    unix_timestamp: moment().format('x')
                }],
                nextID: state.nextID + 1
            }
        case COMPLETE_TASK:
            return {
                ...state,
                potentialTaskList: state.potentialTaskList.map(task => task.id === action.payload ?
                    { ...task, completed_boolean: 1 } : task)
            };
        case HIDE_TASK:
            return {
                ...state,
                potentialTaskList: state.potentialTaskList.map(task => task.id === action.payload ?
                    { ...task, hidden_boolean: 1 } : task)
            };
        case HIDE_TASK_WEEK:
            return {
                ...state,
                potentialTaskList: state.potentialTaskList.map(task => task.id === action.payload ?
                    {
                        ...task,
                        unix_timestamp: moment().add(7, 'days').format('x'),
                        hidden_boolean: 1
                    }
                    : task)
            }
        case HIDE_TASK_MONTH:
            return {
                ...state,
                potentialTaskList: state.potentialTaskList.map(task => task.id === action.payload ?
                    {
                        ...task,
                        unix_timestamp: moment().add(30, 'days').format('x'),
                        hidden_boolean: 1
                    }
                    : task)
            }
        case HIDE_TASK_YEAR:
            return {
                ...state,
                potentialTaskList: state.potentialTaskList.map(task => task.id === action.payload ?
                    {
                        ...task,
                        unix_timestamp: moment().add(365, 'days').format('x'),
                        hidden_boolean: 1
                    }
                    : task)
            }
        case HIDE_ALL_TASKS:
            return {
                ...state,
                potentialTaskList: state.potentialTaskList.map(task => 1 === 1 ?
                    { ...task, hidden_boolean: 1 } : task)
            };
        case SHOW_ALL_TASKS:
            return {
                ...state,
                potentialTaskList: state.potentialTaskList.map(task => 1 === 1 ?
                    { ...task, hidden_boolean: 0 } : task)
            };
        default:
            return state;
    }
}