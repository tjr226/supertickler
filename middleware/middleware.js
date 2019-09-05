const tasksDB = require('../tasks/tasks-model.js');
const usersDB = require('../users/users-model.js');

module.exports = {
    validateUser: function (req, res, next) {
        const userInfo = req.body;
        if (
            userInfo === undefined ||
            userInfo.email === undefined ||
            userInfo.password === undefined
        ) {
            console.log('validate user middleware failed');
            return res.status(400).json({ errorMessage: "Please provide credentials." });
        } else {
            console.log('validate user middleware successful');
            next();
        }
    },

    validateTask: function (req, res, next) {
        const taskInfo = req.body;
        if (
            taskInfo === undefined ||
            taskInfo.task_text === undefined
        ) {
            return res.status(400).json({ errorMessage: "Please provide task_text." });
        } else {
            next();
        }
    },

    validateDaysToPush: function (req, res, next) {
        const pushInfo = req.body;
        if (
            pushInfo === undefined ||
            pushInfo.days_to_push === undefined
        ) {
            return res.status(400).json({ errorMessage: "Please provide days_to_push." })
        } else {
            next();
        }
    },

    validateTaskId: function (req, res, next) {
        const { id } = req.params;

        tasksDB.findById(id)
            .then(task => {
                if (task === undefined) {
                    res.status(400).json({ errorMessage: "Task not found." });
                } else {
                    next();
                }
            })
            .catch(error => {
                res.status(500).json(error);
            })
    },

    validateUserId: function (req, res, next) {

    },
}
