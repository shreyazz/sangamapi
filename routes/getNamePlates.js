const express = require("express");
const router = express.Router();
const namePlateModel = require('../model/nameplate.model')
router.get("/getNameplates", async (req, res) => {
    try {
      const nameplates = await namePlateModel.find();
      return res
        .status(200)
        .json({ message: "Temples are sent! 🟢", namePlates: nameplates });
    } catch (error) {
      return res
        .status(401)
        .json({ message: "Some error occurred in get nameplates route! 🔴", error });
    }
  });
  
  module.exports = router