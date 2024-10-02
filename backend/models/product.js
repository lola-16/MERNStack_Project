// models/product.js
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Category = require("./category");

const productSchema = new mongoose.Schema({
    productId: { type: Number, unique: true },
    image: { type: String, required: true }, 
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: Number, ref: 'Category' },
    stock: { type: Number, required: true },
    description: { type: String },
    deletedPrice:{type:Number}
});

productSchema.plugin(AutoIncrement, { inc_field: 'productId', start_seq: 1 });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
