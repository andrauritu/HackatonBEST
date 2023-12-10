const jwt = require('jsonwebtoken'); // Add this line

/* const isLoggedIn = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401); // If there's no token, return a 401 status

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403); // If the token is not valid, return a 403 status
        req.user = user;
        next(); // If everything is good, go to the next middleware function or route handler
    });
}; */
module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(401).send('Invalid credentials');
    } else {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                res.status(403).send('Invalid credentials');
            } else {
                req.user = decoded; // Attach the decoded user information to the req object
                next();
            }
        });
    }
}

// module.exports = isLoggedIn;

// Middleware for checking the token




////////////////////////////////pana aici//////////////////////////////////////////
// const jwt = require('jsonwebtoken');
// const User = require('../models/UserModel.js');
// const passport = require('passport');

// // isLoggedIn.js
// const isLoggedIn = (req, res, next) => {
//     // Check if user is authenticated
//     console.log('REQ.USER...', req.user); //req.user is filled in by passport with the serialized user info
//     if (req.isAuthenticated()) { //isAuthenticated() is a method provided by passport
//         return next(); // User is logged in, proceed to the next middleware or route handler
//     }

//     // User is not logged in, redirect to login page
//     req.session.returnTo = req.originalUrl

//     res.redirect('/login');
// };

// module.exports = isLoggedIn;



// // module.exports = (req, res, next) => {
// //     console.log('REQ.USER...', req.user); //req.user is filled in by passport with the serialized user info
// //     if (!req.isAuthenticated()) { //isAuthenticated() is a method provided by passport
// //         //store the url they are requesting
// //         // req.flash('error', 'You must be signed in first!');
// //         return res.redirect('/login');
// //     }
// //     next();
// // }



// // module.exports = (req, res, next) => {
// //     const authHeader = req.headers.authorization;
// //     if (!authHeader) {
// //         res.status(403).send('invalid credentials');
// //     }
// //     else {
// //         const token = authHeader.split(' ')[1];
// //         console.log(token);
// //         jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
// //             if (err) {
// //                 res.status(403).send('invalid credentials');
// //             }
// //             else {
// //                 console.log(decoded);
// //                 next();
// //             }
// //         });
// //     }
// // }