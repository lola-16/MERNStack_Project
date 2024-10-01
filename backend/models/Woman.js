const mongoose = require('mongoose');
const AutoIncreWomanSchemat = require('mongoose-sequence')(mongoose);
const Woman = require('./Category');  
const WomanSchema = new mongoose.Schema({
    image: String,
    price: Number,
    old_price:Number,
    offer: Number,
    title:  String,


    CategoryId: { type: Number, ref: 'Category' }, 
}, { _id: false });

WomanSchema.add({ _id: { type: Number } });
WomanSchema.plugin(AutoIncreWomanSchemat, { 
    inc_field: '_id', 
    start_seq: 1,
    id: 'Woman_id'
});

const Woman = mongoose.model('Woman', WomanSchema);

module.exports = Woman;