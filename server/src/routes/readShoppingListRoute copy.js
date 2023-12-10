const UserModel = require('../models/UserModel.js');

module.exports = async (req, res) => {
    const items = await ItemModel.find({});
    res.json(items);

}