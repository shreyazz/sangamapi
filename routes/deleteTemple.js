const express = require("express");
const router = express.Router();
const templeModel = require('../model/temple.model')
router.post("/deleteTemple", async (req, res) => {
  const {name} = req.body;
    try {
      const temple = await templeModel.findOneAndDelete({name: name});
      if(temple){
        return res
        .status(200)
        .json({ message: "Temples is deleted! 🟢", temples: temple });
      }
     
    } catch (error) {
      return res
        .status(401)
        .json({ message: "Some error occurred in delete temple route! 🔴", error });
    }
  });
  
  module.exports = router