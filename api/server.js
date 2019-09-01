const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/auth-router.js');
const taskRouter = require('../tasks/tasks-routes.js');
const restrictedMiddleware = require('../auth/restricted-middleware.js');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/api/auth', authRouter);
server.use('/api/tasks/', restrictedMiddleware, taskRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: "API is working" });
})

module.exports = server;
