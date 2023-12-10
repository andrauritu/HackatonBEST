// const UserModel = require('../models/UserModel.js');

// module.exports = async (req, res) => {
//     // const items = await UserModel.find({});
//     // res.json(items);
//     const suggestions = await UserModel.find().suggestions;

// }

// router/userSuggestionsRoute.js

const UserModel = require('../models/UserModel.js');

module.exports = async (req, res) => {
    try {
        // Fetch the user based on the id parameter from the URL
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return the suggestions field of the user
        return res.status(200).json(user.purchases);
    } catch (err) {
        return res.status(500).json({ message: 'Server error' });
    }
};
