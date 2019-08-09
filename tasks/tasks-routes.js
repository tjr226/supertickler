const router = require('express').Router();
const Tasks = require('./tasks-model.js');
const middleware = require('../middleware/middleware.js');
const moment = require('moment');

// default is to get all for user
router.get('/', (req, res) => {
    const user_id = req.user.user_id;
    Tasks.findByUserId(user_id)
        .then(tasks => {
            // tasks.forEach(function(task) {
                // console.log(moment(task.unix_timestamp).format())
            // })
            res.status(200).json(tasks);
        })
        .catch(error => {
            res.status(500).json({ errorMessage: "Could not get all tasks for the user." });
        })
})

router.post('/', middleware.validateTask, (req, res) => {
    let taskInfo = {}
    if (req.body.days_to_push === undefined) {
        taskInfo = {
            ...req.body,
            user_id: req.user.user_id,
            hidden_boolean: 0,
            completed_boolean: 0,
            unix_timestamp: moment().format('x')
        };
    } else {
        const bodyInfo = req.body;
        const new_unix_timestamp =
            moment()
                .add(req.body.days_to_push, 'days')
                .format('x');
        delete bodyInfo.days_to_push;
        taskInfo = {
            ...bodyInfo,
            user_id: req.user.user_id,
            hidden_boolean: 1,
            completed_boolean: 0,
            unix_timestamp: new_unix_timestamp
        }
    }

    Tasks.add(taskInfo)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: "The task could not be saved." });
        })

})

router.put('/:id/hide', middleware.validateTaskId, (req, res) => {
    const { id } = req.params;
    const changes = { hidden_boolean: 1 };

    Tasks.update(changes, id)
        .then(response => {
            res.status(204).json(response);
        })
        .catch(error => {
            res.status(500).json({ errorMessage: "The task could not be hidden." });
        })
})

router.put('/:id/complete', middleware.validateTaskId, (req, res) => {
    const { id } = req.params;
    const changes = { completed_boolean: 1 };

    Tasks.update(changes, id)
        .then(response => {
            res.status(204).json(response);
        })
        .catch(error => {
            res.status(500).json({ errorMessage: "The task could not be marked as complete." });
        })
})

router.put('/:id/uncomplete', middleware.validateTaskId, (req, res) => {
    const { id } = req.params;
    const changes = { completed_boolean: 0 };

    Tasks.update(changes, id)
        .then(response => {
            res.status(204).json(response);
        })
        .catch(error => {
            res.status(500).json({ errorMessage: "The task could not be marked as incomplete." });
        })
})

router.put('/:id/push',
    middleware.validateTaskId,
    middleware.validateDaysToPush,
    async (req, res) => {
        const { id } = req.params;
        const new_unix_timestamp =
            moment()
                .add(req.body.days_to_push, 'days')
                .format('x');
        changes = {
            unix_timestamp: new_unix_timestamp,
            hidden_boolean: 1
        };

        Tasks.update(changes, id)
            .then(response => {
                res.status(204).json(response);
            })
            .catch(error => {
                res.status(500).json({ errorMessage: "The task could not be pushed." });
            })

    })

router.put('/hide_all', (req, res) => {
    const user_id = req.user.user_id;
    Tasks.hideAllForUser(user_id)
        .then(response => {
            res.status(204).json(response);
        })
        .catch(error => {
            res.status(500).json({ errorMessage: "Failed to hide all tasks." });
        })
})

router.put('/unhide_all', (req, res) => {
    const user_id = req.user.user_id;
    Tasks.unhideAllForUser(user_id)
        .then(response => {
            res.status(204).json(response);
        })
        .catch(error => {
            res.status(500).json({ errorMessage: "Failed to unhide all tasks." });
        })
})

module.exports = router;