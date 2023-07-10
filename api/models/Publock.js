const mongoose = require('mongoose');

//this whoile thing is a smart contract //More stuff may be added after reveiw or completing smart contracts 
//we need 
//location 
//title 
//max capcacity -- this will ultimitly determine if its full or not 
//dates to book -- we need some sort of way to track dates booked over max capcity
//so we need to import the calander dates into the smart contract 
//everyting else is variable and not needed for the smart contract 
//owner - address and other KYC data 
//price 
//description 

const publockSchema = new mongoose.Schema({
    owner: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    title: String,
    address: String, 
    photos: [String], //centralized 
    description: String, 
    perks: [String], //centralized 
    extraInfo: String, //centralized 
    startTime: Number, //centralized 
    endTime: Number, //centralized 
    maxCapacity: Number,
    price: Number,
});

const PublockModal = mongoose.model('Publock', publockSchema);

module.exports = PublockModal;
