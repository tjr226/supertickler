const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodeToken) => {
            if (err) {
                res.status(401).json({ message: "Invalid credentials." });
            } else {
                req.user = {
                    email: decodeToken.email,
                    user_id: decodeToken.user_id
                };
                next();
            }
        })
    } else {
        res.status(400).json({ message: "Please provide Authorization token." });
    }
}