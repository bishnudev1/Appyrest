const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Fill give a product name']
    },
    desc: {
        type: String,
        required: [true,'Fill give a product description']
    },
    rating: {
        type: Number,
        required: [true,'Fill give a product rating'],
        default:0
    },
    price: {
        type: Number,
        required: [true,'Fill give a product price']
    },
});

const Products = new mongoose.model('Products',ProductsSchema);

module.exports = Products;