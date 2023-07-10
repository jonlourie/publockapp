const mongoose = require('mongoose');

//More stuff may be added after reveiw or completing smart contracts 

//smart contract 
//publock booked with 
//person who booked - address 
//start time 
//end time 
//number of boxes you are reserving or ounces 
//thats about all for now 

//price is publick because its in crypto 

//things kept on the centralized server 
//name 
//phone number 
//shipping information 

//we will also change this around you so dont need to log in to book with a publock

const bookingSchema = new mongoose.Schema({
    publock: {type:mongoose.Schema.Types.ObjectId, required:true, ref:'Publock'}, 
    user: {type:mongoose.Schema.Types.ObjectId, required:true},
    storeStart: {type:Date, required:true},
    storeEnd: {type:Date, required:true},
    name: {type:String, required:true},
    phone: {type:String, required:true},
    price: Number,
});

const BookingModal = mongoose.model('Booking', bookingSchema);

module.exports = BookingModal;