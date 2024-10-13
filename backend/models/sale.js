// models/sale.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    productName: { type: String, required: true }, // You can add the name of the product directly
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }, // Optionally include the price for each product
}, { _id: false }); // Prevent creating separate IDs for each product

const saleSchema = new mongoose.Schema({
    orderId: { type: Number, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    orderDate: { type: Date, default: Date.now },
    products: [productSchema],
});


const Sale = mongoose.model('Sale', saleSchema);
module.exports = Sale;
