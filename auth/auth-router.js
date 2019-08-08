const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');
const secrets = require('../config/secrets.js');

router.post('/register', validateUser, (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

router.post('/login', validateUser, (req, res) => {
    const { email, password } = req.body;
    Users.findBy({ email })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({
                message: `Welcome ${user.email}`,
                token
            });
        } else {
            res.status(401).json({ message: "Invalid credentials." });
        }
    })
    .catch(error => {
        res.status(500).json(error);
    })
});

function generateToken(user) {
    const payload = {
        user_id: user.id,
        email: user.email
    };

    const options = {
        expiresIn: '1d',
    };

    return jwt.sign(payload, secrets.jwtSecret, options);
};

function validateUser(req, res, next) {
    const userInfo = req.body;
    if (userInfo.email === undefined) {
        return res.status(400).json({ errorMessage: "Please provide email." });
    } else if (userInfo.password === undefined) {
        return res.status(400).json({ errorMessage: "Please provide password." });
    } else {
        next();
    }
}

module.exports = router;