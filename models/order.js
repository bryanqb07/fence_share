const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    products: [],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    subTotal: {
        type: Number,
        required: true
    },
    installationFee: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        required: true
    },
    shippingCost: {
        type: Number,
        required: true
    },
    insuranceFee: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    billingInformation: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        companyName: {
            type: String,
        },
        phoneNumber: {
            type: String
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zipcode: {
            type: String,
            required: true
        }
    },
    shippingInformation: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        companyName: {
            type: String,
        },
        phoneNumber: {
            type: String
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zipcode: {
            type: Number,
            required: true
        }
    },
    invoiceNumber: {
        type: String,
        required: true
    },
    insured: {
        type: Boolean,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    isShipped: {
        type: Boolean,
        default: false
    },
    shippedDate: {
        type: Date
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Order = mongoose.model('orders', OrderSchema)