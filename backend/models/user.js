const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = new mongoose.Schema({
    userId: { type: Number, unique: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }, 
    createdAt: { type: Date, default: Date.now }
});

userSchema.plugin(AutoIncrement, { inc_field: 'userId', start_seq: 1 });

const User = mongoose.model('User', userSchema);
module.exports = User;
