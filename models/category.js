const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = Category = mongoose.model('categories', CategorySchema)