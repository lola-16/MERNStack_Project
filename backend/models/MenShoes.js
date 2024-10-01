const mongoose = require('mongoose');
const AutoIncreMenShoesSchemat = require('mongoose-sequence')(mongoose);
const MenShoesSchema = new mongoose.Schema({
    image: String,
    price: Number,
    old_price:Number,
    offer: Number,
    title:  String,
    description: String,


    CategoryId: { type: Number, ref: 'Category' }, 
}, { _id: false });

MenShoes.add({ _id: { type: Number } });
MenShoes.plugin(AutoIncreMenShoest, { 
    inc_field: '_id', 
    start_seq: 1,
    id: 'MenShoes_id'
});

const MenShoes = mongoose.model('MenShoes', MenShoes);

module.exports = MenShoes;