const mongoose = require('mongoose');
const AutoIncreOrderSchemat = require('mongoose-sequence')(mongoose);
const Category = require('./Category');  
const OrderSchema = new mongoose.Schema({
    name:String,
    government: String,
    area: String,
    address: String,
    image: String,
    phone: Number,
    notes: String,
    cupone:String,


    CategoryId: { type: Number, ref: 'Category' }, 
}, { _id: false });

OrderSchema.add({ _id: { type: Number } });
OrderSchema.plugin(AutoIncreOrderSchemat, { 
    inc_field: '_id', 
    start_seq: 1,
    id: 'Order_id'
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;