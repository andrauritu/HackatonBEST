const ItemModel = require('../models/ItemModel.js');

module.exports = async (req, res) => {
    const { id } = req.params;
    const item = await ItemModel.findById(id);
    item.isCompleted = req.body.isCompleted;
    item.text = req.body.text;
    const savedItem = await item.save();
    res.json(savedItem);
}