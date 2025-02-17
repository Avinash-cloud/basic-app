const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    country: String,
    state: String,
    city: String,
    gender: String,
    dob: Date,
    age:Number,
},{timestamps:true});
module.exports = mongoose.model('User', userSchema);