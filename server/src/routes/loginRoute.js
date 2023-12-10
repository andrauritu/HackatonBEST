
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
const secretKey = process.env.SECRET_KEY;

module.exports = async (req, res, next) => {
    try {
        const user = await User.findOne({ id: req.body.id });
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }
        const token = jwt.sign({ id: user.id, role: user.role }, secretKey);
        console.log('Generated token:', token); // Log the generated token
        return res.status(200).json({ message: 'Login successful', user, token });
    } catch (err) {
        return next(err);
    }
};