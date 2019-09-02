export const ADD_TASK = "ADD_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";

export const HIDE_TASK = "HIDE_TASK";
export const HIDE_TASK_WEEK = "HIDE_TASK_WEEK";
export const HIDE_TASK_MONTH = "HIDE_TASK_MONTH";
export const HIDE_TASK_YEAR = "HIDE_TASK_YEAR";

export const HIDE_ALL_TASKS = "HIDE_ALL_TASKS";
export const SHOW_ALL_TASKS = "SHOW_ALL_TASKS";

export const SHOW_NEXT_20 = "SHOW_NEXT_20";

export const addTask = addTaskObject => {
    return {
        type: ADD_TASK,
        payload: addTaskObject
    }
}

export const completeTask = taskID => {
    return {
        type: COMPLETE_TASK,
        payload: taskID
    }
}

export const hideTask = hideTaskPayload => {
    return {
        type: HIDE_TASK,
        payload: hideTaskPayload
    }
}

export const hideTaskWeek = taskID => {
    return {
        type: HIDE_TASK_WEEK,
        payload: taskID
    }
}

export const hideTaskMonth = taskID => {
    return {
        type: HIDE_TASK_MONTH,
        payload: taskID
    }
}

export const hideTaskYear = taskID => {
    return {
        type: HIDE_TASK_YEAR,
        payload: taskID
    }
}

export const hideAllTasks = hideAllTasksPayload => {
    return {
        type: HIDE_ALL_TASKS
    }
}

export const showAllTasks = showAllTasksPayload => {
    return {
        type: SHOW_ALL_TASKS
    }
}

export const showNext20 = showNext20Payload => {
    return {
        type: SHOW_NEXT_20
    }
}