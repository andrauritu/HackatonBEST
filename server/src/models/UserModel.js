const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['CEO', 'Manager', 'Client'],
    },
    purchases: [
        {
            type: String,
        }
    ],
    suggestions: [
        {
            type: String,
        }
    ]
}
);

module.exports = mongoose.model('User', UserSchema); 