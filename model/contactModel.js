const mongoose = require('mongoose');

const contactModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

const Contact = mongoose.model('Contact', contactModel)
module.exports = Contact;