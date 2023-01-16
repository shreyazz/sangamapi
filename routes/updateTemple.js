const express = require("express");
const router = express.Router();
const templeModel = require("../model/temple.model");
router.post("/updateTemple", async (req, res) => {
  try {
    const { price, name, newName, imageLink, images, desc } = req.body;
    console.log(price, name, newName, imageLink, images);
    if (!name) {
      return res.status(422).json({ message: "Please fill all the name! 🔴" });
    }
    const newTemple = await templeModel.findOneAndUpdate(
      { name: name },
      { $set: { name: newName, price: price, imageLink: imageLink, images: images, desc: desc } },
      { new: true }
    );
    if (newTemple) {
      return res.status(201).json({
        message: "Temple Updated! 🟢",
        templeDetail: newTemple,
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Some error occurred in add Temple route! 🔴",
      error: error,
    });
  }
});

module.exports = router;
