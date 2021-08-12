const express = require("express");
const router = new express.Router();

const DSATASKCSE = require("../models/DSA_TASK_CSE");

//handling POST request
router.post("/dsataskcse", async (req, res) => {
  try {
    const addDsataskcseRecords = new DSATASKCSE(req.body);
    console.log(req.body);
    const insertDsataskcse = await addDsataskcseRecords.save();
    res.status(201).send(insertDsataskcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/dsataskcse", async (req, res) => {
  try {
    const getDsataskcse = await DSATASKCSE.find({});
    res.send(getDsataskcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/dsataskcse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getDsataskcse = await DSATASKCSE.findById({ _id });
    res.send(getDsataskcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/dsataskcse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getDsataskcse = await DSATASKCSE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getDsataskcse);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/dsataskcse/:id", async (req, res) => {
  try {
    const getDsataskcse = await DSATASKCSE.findByIdAndDelete(req.params.id);

    res.send(getDsataskcse);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
