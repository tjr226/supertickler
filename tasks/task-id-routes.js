const router = require('express').Router();
const Tasks = require('./tasks-model.js');
const middleware = require('../middleware/middleware.js');
const moment = require('moment');

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

router.put('/:id/pushMonth',
    middleware.validateTaskId,
    async (req, res) => {
        const { id } = req.params;
        const new_unix_timestamp =
            moment()
                .add(30, 'days')
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
                res.status(500).json({ errorMessage: "The task could not be pushed by a month." });
            })
    })

router.put('/:id/pushYear',
    middleware.validateTaskId,
    async (req, res) => {
        const { id } = req.params;
        const new_unix_timestamp =
            moment()
                .add(365, 'days')
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
                res.status(500).json({ errorMessage: "The task could not be pushed by a year." });
            })
    })

module.exports = router;