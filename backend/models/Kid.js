const mongoose = require('mongoose');
const AutoIncreKidSchemat = require('mongoose-sequence')(mongoose);
const Kid = require('./Category');  
const KidSchema = new mongoose.Schema({
    image: String,
    price: Number,
    old_price:Number,
    offer: Number,
    title:  String,


    CategoryId: { type: Number, ref: 'Category' }, 
}, { _id: false });

KidSchema.add({ _id: { type: Number } });
KidSchema.plugin(AutoIncreKidSchemat, { 
    inc_field: '_id', 
    start_seq: 1,
    id: 'Kid_id'
});

const Kid = mongoose.model('Kid', KidSchema);

module.exports = Kid;