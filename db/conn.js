const mongoose = require('mongoose');
require('dotenv').config();
const URI = process.env.URI;
const connectToDB = () => {
    mongoose.connect(URI, (err) => {
        if(err) console.log('DB not connected 🔴')
        else console.log('DB connected 🟢')
    })
}

module.exports = connectToDB