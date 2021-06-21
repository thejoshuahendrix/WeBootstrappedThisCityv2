const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const ItemSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    message:{
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    title:{
        type: String
    }
    
});

module.exports = Item = mongoose.model('item', ItemSchema);