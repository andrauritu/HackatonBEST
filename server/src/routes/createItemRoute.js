// const ItemModel = require('../models/ItemModel');
// module.exports = async (req, res) => {
//     const { text } = req.body;
//     // console.log(text);
//     const item = new ItemModel({
//         text,
//         isCompleted: false,
//     });
//     const savedItem = await item.save();
//     res.json(savedItem);
// }