const mongoose = require('mongoose');

const nameplateSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: false
    },
    images: {
        type: [{type: String}],
        required: false
    },
});

const nameplateModel = mongoose.model("Nameplates", nameplateSchema);
module.exports = nameplateModel