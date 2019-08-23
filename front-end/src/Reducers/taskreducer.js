import { ADD_TASK, COMPLETE_TASK, PUSH_TASK } from '../Actions';
import moment from 'moment';

const initialState = {
    potentialTaskList: [
        { task_text: "Task One", id: 0, completed_boolean: false, hidden_boolean: false, unix_timestamp: moment().format('x') },
        { task_text: "TaskTwo", id: 1, completed_boolean: false, hidden_boolean: false, unix_timestamp: moment().add(1, 'days').format('x') }
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
                    completed_boolean: false,
                    hidden_boolean: false,
                    unix_timestamp: moment().add(action.payload.days_to_push, 'days').format('x')
                }],
                nextID: state.nextID + 1
            }
        case COMPLETE_TASK:
            return {
                ...state,
                potentialTaskList: state.potentialTaskList.map(task => task.id === action.payload ?
                    { ...task, completed_boolean: !task.completed_boolean } : task)
            };
        case PUSH_TASK:
            return {
                ...state,
                potentialTaskList: state.potentialTaskList.map(task => task.id === action.payload.taskID
                    ?
                    {
                        ...task,
                        unix_timestamp: moment().subtract(action.payload.days_to_push, 'days')
                    }
                    : task)
            }
        default:
            return state;
    }
}