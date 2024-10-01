const mongoose = require('mongoose');
const AutoIncreManSchemat = require('mongoose-sequence')(mongoose);
const Category = require('./Category');  
const ManSchema = new mongoose.Schema({
    image: String,
    price: Number,
    old_price:Number,
    offer: Number,
    title:  String,


    CategoryId: { type: Number, ref: 'Category' }, 
}, { _id: false });

ManSchema.add({ _id: { type: Number } });
ManSchema.plugin(AutoIncreManSchemat, { 
    inc_field: '_id', 
    start_seq: 1,
    id: 'Man_id'
});

const Man = mongoose.model('Man', ManSchema);

module.exports = Man;