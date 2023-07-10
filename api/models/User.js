const mongoose = require('mongoose');
const {Schema} = mongoose;

//We will input a wallet address into this schema 

const UserSchema = new Schema({
    name: String,
    email: {type:String, unique:true}, 
    password: String,
    balance: {type:Number, default:0},
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;