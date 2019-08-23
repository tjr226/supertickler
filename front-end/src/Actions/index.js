export const ADD_TASK = "ADD_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const PUSH_TASK = "PUSH_TASK";

export const addTask = addTaskObject => {
    console.log(addTaskObject);
    return {
        type: ADD_TASK,
        payload: addTaskObject
    }
}

export const completeTask = taskID => {
    console.log(taskID, "is completed");
    return {
        type: COMPLETE_TASK,
        payload: taskID
    }
}

export const pushTask = pushTaskPayload => {
    console.log(pushTaskPayload, "is pushed");
    return {
        type: PUSH_TASK,
        payload: pushTaskPayload
    }
}