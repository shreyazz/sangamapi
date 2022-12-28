const express = require("express");
const router = express.Router();
const namePlateModel = require('../model/nameplate.model')
router.post("/getNameplateById", async (req, res) => {
    const {id} = req.body;
    try {
      const nameplates = await namePlateModel.findOne({_id: id});
      return res
        .status(200)
        .json({ message: "Nameplate are sent! 🟢", namePlates: nameplates });
    } catch (error) {
      return res
        .status(401)
        .json({ message: "Some error occurred in get nameplates by id route! 🔴", error });
    }
  });
  
  module.exports = router