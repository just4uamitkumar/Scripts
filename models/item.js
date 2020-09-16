const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = Item = mongoose.model('Scripts', ItemSchema)