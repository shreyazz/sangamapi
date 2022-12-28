const express = require("express");
const router = express.Router();
const templeModel = require('../model/temple.model')
router.post("/getTempleById", async (req, res) => {
    const {id} = req.body;
    try {
      const temples = await templeModel.findOne({_id: id});
      return res
        .status(200)
        .json({ message: "Temple is sent! 🟢", temples: temples });
    } catch (error) {
      return res
        .status(401)
        .json({ message: "Some error occurred in get temple by id route! 🔴", error });
    }
  });
  
  module.exports = router