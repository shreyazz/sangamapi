const express = require("express");
const router = express.Router();
const namePlateModel = require("../model/nameplate.model");
router.post("/updateNameplate", async (req, res) => {
  try {
    const { price, name, newName, imageLink, images } = req.body;
    console.log(price, name, newName, imageLink, images);
    if (!name) {
      return res.status(422).json({ message: "Please fill all the name! 🔴" });
    }
    const newNp = await namePlateModel.findOneAndUpdate(
      { name: name },
      { $set: { name: newName, price: price, imageLink: imageLink, images: images } },
      { new: true }
    );
    if (newTemple) {
      return res.status(201).json({
        message: "namePlate Updated! 🟢",
        namePlateDetail: newNp,
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Some error occurred in update NP route! 🔴",
      error: error,
    });
  }
});

module.exports = router;