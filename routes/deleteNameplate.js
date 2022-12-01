const express = require("express");
const router = express.Router();
const namePlateModel = require("../model/nameplate.model");
router.post("/deleteNameplate", async (req, res) => {
  const { name } = req.body;
  try {
    const nameplate = await namePlateModel.findOneAndDelete({ name: name });
    if (temple) {
      return res
        .status(200)
        .json({ message: "Nameplate is deleted! 🟢", nameplate: nameplate });
    }
  } catch (error) {
    return res
      .status(401)
      .json({
        message: "Some error occurred in delete nameplate route! 🔴",
        error: error,
      });
  }
});

module.exports = router;
