const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./src/routes/router');
const session = require('express-session');
const app = express();
// const XLSX = require('xlsx');


const sessionConfig = {
    name: 'session',
    // store,
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}


mongoose.connect('mongodb://127.0.0.1:27017/RXAIdb').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB');
    console.log(err);
});

app.use(session(sessionConfig));

app.use(express.json());
app.use(morgan('tiny'));

app.use(cors());

app.use('/', router);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});