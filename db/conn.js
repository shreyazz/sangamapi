const mongoose = require('mongoose');
require('dotenv').config();
const connectToDB = () => {
    mongoose.connect("mongodb+srv://sangam:sangam@cluster0.5iqyskn.mongodb.net/?retryWrites=true&w=majority", (err) => {
        if(err) console.log('DB not connected 🔴')
        else console.log('DB connected 🟢')
    })
}

module.exports = connectToDB