const express = require("express");
const router = express.Router();
const namePlateModel = require("../model/nameplate.model");
router.post("/addNameplates", async (req, res) => {
  try {
    const { name, price, imageLink } = req.body;
    if (!name || !price || !imageLink) {
      return res.status(422).json({ message: "Please fill all the data! 🔴" });
    }
    const newNameplate = await namePlateModel.create({
        name, price, imageLink
    });
    if (!newNameplate) {
      return res.json({
        message: "Some error occurred during adding a new nameplate! 🔴",
      });
    }
    return res
      .status(201)
      .json({
        message: "Nameplate Added! 🟢",
        namePlateDetails: { name, price, imageLink},
      });
  } catch (error) {
    return res
      .status(401)
      .json({ 
        message: "Some error occurred in add Nameplate route! 🔴",
        error: error,
      });
  }
});

module.exports = router;
