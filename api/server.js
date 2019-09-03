const express = require('express');

const helmet = require('helmet');

const authRouter = require('../auth/auth-router.js');
const taskRouter = require('../tasks/tasks-routes.js');
const restrictedMiddleware = require('../auth/restricted-middleware.js');

const server = express();

const cors = require('cors');
server.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}
));


// var allowCrossDomain = function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // allow requests from any other server
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); // allow these verbs
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
// }

// server.use(allowCrossDomain); // plumbing it in as middleware

server.use(express.json());

server.use(helmet());

server.use('/api/auth', authRouter);
server.use('/api/tasks/', restrictedMiddleware, taskRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: "API is working" });
})

module.exports = server;

// 