const { booleanParser } = require('config/parser');
const mongoose = require('mongoose');
const Schema = mongoos.Schema;

const userSchema = new Schema({
    title: {
        type: String,
        required: true
    },
  
    id: {
        type: Long,
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
    },

    phone: {
        type: String,
    }, 

    status: {
        type: String,
        default: 'enabled'
    }, 
   
    creationDate: {
        type: Date,
        default: Date.now()
    }
})