const mongoose = require('mongoose');

const templeSchema = mongoose.Schema({
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
});

const templeModel = mongoose.model("Temples", templeSchema);
module.exports = templeModel