const mongoose = require('mongoose');
const AutoIncreCategorySchemat = require('mongoose-sequence')(mongoose);
const CategorySchema = new mongoose.Schema({
    category_id: { type: Number, required: true },
    name: { type: String, required: true, unique: true },
}, { _id:false });

CategorySchema.add({ _id: { type: Number } });
CategorySchema.plugin(AutoIncreCategorySchemat, { 
    inc_field: '_id', 
    start_seq: 1, 
    id: 'Category_id'
});
const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;