const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    products: [],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    status: {
        type: String,
        default: "active",
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = Cart = mongoose.model('carts', CartSchema)