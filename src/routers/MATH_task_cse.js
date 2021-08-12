const express = require("express");
const router = new express.Router();

const MATHTASKCSE = require("../models/MATH_TASK_CSE");

//handling POST request
router.post("/mathtaskcse", async (req, res) => {
  try {
    const addMathtaskcseRecords = new MATHTASKCSE(req.body);
    console.log(req.body);
    const insertMathtaskcse = await addMathtaskcseRecords.save();
    res.status(201).send(insertMathtaskcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/mathtaskcse", async (req, res) => {
  try {
    const getMathtaskcse = await MATHTASKCSE.find({});
    res.send(getMathtaskcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/mathtaskcse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMathtaskcse = await MATHTASKCSE.findById({ _id });
    res.send(getMathtaskcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/mathtaskcse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMathtaskcse = await MATHTASKCSE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getMathtaskcse);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/mathtaskcse/:id", async (req, res) => {
  try {
    const getMathtaskcse = await MATHTASKCSE.findByIdAndDelete(req.params.id);

    res.send(getMathtaskcse);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
