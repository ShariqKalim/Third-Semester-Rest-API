const express = require("express");
const router = new express.Router();

const DSACSE = require("../models/DSA_CSE");

//handling POST request
router.post("/dsacse", async (req, res) => {
  try {
    const addDsacseRecords = new DSACSE(req.body);
    console.log(req.body);
    const insertDsacse = await addDsacseRecords.save();
    res.status(201).send(insertDsacse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/dsacse", async (req, res) => {
  try {
    const getDsacse = await DSACSE.find({});
    res.send(getDsacse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/dsacse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getDsacse = await DSACSE.findById({ _id });
    res.send(getDsacse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/dsacse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getDsacse = await DSACSE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getDsacse);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/dsacse/:id", async (req, res) => {
  try {
    const getDsacse = await DSACSE.findByIdAndDelete(req.params.id);

    res.send(getDsacse);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
