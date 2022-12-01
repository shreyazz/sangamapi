const express = require("express");
const router = express.Router();
const templeModel = require('../model/temple.model')
router.get("/getTemples", async (req, res) => {
    try {
      const temples = await templeModel.find();
      return res
        .status(200)
        .json({ message: "Temples are sent! 🟢", temples: temples });
    } catch (error) {
      return res
        .status(401)
        .json({ message: "Some error occurred in get temple route! 🔴", error });
    }
  });
  
  module.exports = router