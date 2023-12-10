// middleware/verifyToken.js

const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
const secretKey = process.env.SECRET_KEY;

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, secretKey);
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = verifyToken;
