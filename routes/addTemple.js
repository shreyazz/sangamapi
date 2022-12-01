const express = require("express");
const router = express.Router();
const templeModel = require("../model/temple.model");
router.post("/addTemples", async (req, res) => {
  try {
    const { name, price, imageLink } = req.body;
    if (!name || !price || !imageLink) {
      return res.status(422).json({ message: "Please fill all the data! 🔴" });
    }
    const newTemple = await templeModel.create({
        name, price, imageLink
    });
    if (!newTemple) {
      return res.json({
        message: "Some error occurred during adding a new temple! 🔴",
      });
    }
    return res
      .status(201)
      .json({
        message: "Temple Added! 🟢",
        templeDetail: { name, price, imageLink},
      });
  } catch (error) {
    return res
      .status(401)
      .json({
        message: "Some error occurred in add Temple route! 🔴",
        error: error,
      });
  }
});

module.exports = router;
