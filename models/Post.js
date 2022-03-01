const { booleanParser } = require('config/parser');
const mongoose = require('mongoose');
const Schema = mongoos.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
   
    status: {
        type: String,
        default: 'public'

    }, 
    description: {
        type: String,
        reuired: true
    },

    creationDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('post', PostSchema);