const express = require("express");
const router = express.Router();
const Teacher = require("../models/teacher");
const { ObjectId } = require("mongodb");

router.post("/information", async (req, res, next) => {
  const { objectId } = req.body;
  try {
    const user = await Teacher.findOne({
      _id: new ObjectId(objectId),
    });
    // console.log(user);
    return res.json({
      username: user.username,
      phone: user.phone,
      email: user.email,
      gender: user.gender,
      birthday: user.dateOfBirth,
      point: user.point,
      nickname: user.nickname,
      style: user.style,
      instagram: user.instagram,
      avatar: user.profilePic,
    });
  } catch (err) {
    throw new Error("Server Error");
  }
});

router.post("/edit", async (req, res, next) => {
  const { editField, editValue } = req.body;
  const ID = "67d3eb571cc1f316f7a27482";
  const updateObject = { [editField]: editValue };
  try {
    const user = await Teacher.updateOne(
      { _id: new ObjectId(ID) },
      { $set: updateObject }
    );
    console.log(user);
    return res.send(`Successfully update ${editField}`);
  } catch (err) {
    throw new Error("Server Error");
  }
});

module.exports = router;
