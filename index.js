const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectToDB = require("./db/conn");

// middlewares
const app = express();
app.use(cors());
app.use(express.json());
app.use('/',require('./routes/register'))
app.use('/',require('./routes/login'))
app.use('/',require('./routes/getUserByEmail'))
app.use('/',require('./routes/getAllUsers'))
app.use('/',require('./routes/addTemple'))
app.use('/',require('./routes/getTemples'))
app.use('/',require('./routes/getNamePlates'))
app.use('/',require('./routes/addNamePlates'))
app.use('/',require('./routes/deleteTemple'))
app.use('/',require('./routes/deleteNameplate'))
app.use('/',require('./routes/updateTemple'))
app.use('/',require('./routes/updateNameplate'))
app.use('/',require('./routes/getTempleById'))

// defining port

connectToDB();

// setting up an empty GET Route
app.get("/", (req, res) => {
  res.json({
    message: "You've come to the right place... it's a GET request sent to the Sangam AD's API!!",
  });
});

// Starting Server on PORT
app.listen(8080, () => console.log("Server started on PORT Number: " + 8080 + " 🟢"));

// export main module
module.exports = app