const express = require("express");
const router = new express.Router();

const MATHEE = require("../models/EE/MATH_EE");

//handling POST request
router.post("/mathee", async (req, res) => {
  try {
    const addMATHEERecords = new MATHEE(req.body);
    console.log(req.body);
    const insertMATHEE = await addMATHEERecords.save();
    res.status(201).send(insertMATHEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/mathee", async (req, res) => {
  try {
    const getMATHEE = await MATHEE.find({});
    res.send(getMATHEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/mathee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMATHEE = await MATHEE.findById({ _id });
    res.send(getMATHEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/mathee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMATHEE = await MATHEE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getMATHEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/mathee/:id", async (req, res) => {
  try {
    const getMATHEE = await MATHEE.findByIdAndDelete(req.params.id);

    res.send(getMATHEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
