const express = require("express");
const router = new express.Router();

const MATHTASKEE = require("../models/EE/MATH_TASK_EE");

//handling POST request
router.post("/mathtaskee", async (req, res) => {
  try {
    const addMATHTASKEERecords = new MATHTASKEE(req.body);
    console.log(req.body);
    const insertMATHTASKEE = await addMATHTASKEERecords.save();
    res.status(201).send(insertMATHTASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/mathtaskee", async (req, res) => {
  try {
    const getMATHTASKEE = await MATHTASKEE.find({});
    res.send(getMATHTASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/mathtaskee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMATHTASKEE = await MATHTASKEE.findById({ _id });
    res.send(getMATHTASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/mathtaskee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMATHTASKEE = await MATHTASKEE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getMATHTASKEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/mathtaskee/:id", async (req, res) => {
  try {
    const getMATHTASKEE = await MATHTASKEE.findByIdAndDelete(req.params.id);

    res.send(getMATHTASKEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
