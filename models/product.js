const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    code: {
        type: String,
        unique: true,
        required: true
    },
    dimensions: {
        width: { type: Number },
        height: { type: Number }
    },
    price: {
        per_unit: { 
            type: Number,
            required: true
         },
        per_ft_install_fee: { 
            type: Number,
            required: true
         },
        flat_install_fee: { 
            type: Number,
            required: true
         },
        sq_ft_over_time: {
            0: { // 0-3 months
                type: Number,
                required: true
            },
            1: { // 3-6 months
                type: Number,
                required: true
            },
            2: { // 6-9 months
                type: Number,
                required: true
            }, // 9-12 months
            3: {
                type: Number,
                required: true
            }
        }
    },
    imgString: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    },
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = Product = mongoose.model('products', ProductSchema)