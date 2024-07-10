const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number
    },
    isActive: {
        type: Boolean,
        default: true
    },
    category : {
        type : [mongoose.Schema.ObjectId],
        ref : 'category'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('product1',productSchema)