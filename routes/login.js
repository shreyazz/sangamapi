const express = require("express");
const router = express.Router();
const userModel = require('../model/user.model')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
router.post("/login", async (req, res) => {
    try {
        const secretKey = process.env.JWT_SECRET;
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(422).json({ message: "Please fill all the data! 🔴" });
      }
      const findUser = await userModel.findOne({
        email: email,
      });

      if (!findUser) {
        return res.status(401).json({ message: "Email not found! 🔴" });
      }
      const passMatching = await bcrypt.compare(password, findUser.password);
      if (!passMatching) {
        return res.status(404).json({ message: "Auth Failed" });
      }
      let token = jwt.sign(
        { email: findUser.email, userId: findUser._id, name: `${findUser.fname} ${findUser.lname}`,  },
        secretKey
      );
      return res
        .status(200)
        .json({ message: "User logged in! 🟢", token: token });
    } catch (error) {
      return res
        .status(401)
        .json({ message: "Some error occurred in login route! 🔴", error });
    }
  });
  
  module.exports = router