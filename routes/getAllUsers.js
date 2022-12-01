const express = require("express");
const router = express.Router();
const userModel = require('../model/user.model')
router.get("/getAllUsers", async (req, res) => {
    try {
      const users = await userModel.find();
      return res
        .status(200)
        .json({ message: "All Users are sent! 🟢", users: users });
    } catch (error) {
      return res
        .status(401)
        .json({ message: "Some error occurred in getUserByEmail route! 🔴", error });
    }
  });
  
  module.exports = router