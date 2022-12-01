const express = require("express");
const router = express.Router();
const userModel = require('../model/user.model')
router.post("/getUserByEmail", async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) {
        return res.status(422).json({ message: "Please fill all the data! 🔴" });
      }
      const findUser = await userModel.findOne({
        email: email,
      });
      return res
        .status(200)
        .json({ message: "User Found! 🟢", user: findUser });
    } catch (error) {
      return res
        .status(401)
        .json({ message: "Some error occurred in getUserByEmail route! 🔴", error });
    }
  });
  
  module.exports = router