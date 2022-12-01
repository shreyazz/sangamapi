const express = require("express");
const router = express.Router();
const userModel = require('../model/user.model')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
router.post("/register", async (req, res) => {
    try {
      const { fname, lname, number, email, password } = req.body;
      if (!fname || !lname || !number ||!email || !password) {
        return res.status(422).json({ message: "Please fill all the data! 🔴" });
      }
      const findUser = await userModel.findOne({ email });
      if (findUser) {
      return res.status(409).json({ message: "user is already present! 🔴" });
      }
      const hashedPass = await bcrypt.hash(password, 12);
      const newUser = await userModel.create({
        fname, lname, number, email, password: hashedPass 
      });
  
      if (!newUser) {
       return res.json({
          message: "Some error occurred during registration of the user! 🔴",
        });
      }
      return res.status(201).json({ message: "User registered! 🟢", userDetails: {fname, lname, email, number, password: hashedPass, } });
    } catch (error) {
      return res
        .status(401)
        .json({ message: "Some error occurred in register route! 🔴", error: error});
    }
  });
  
  module.exports = router