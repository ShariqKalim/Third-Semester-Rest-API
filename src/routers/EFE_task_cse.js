const express = require("express");
const router = new express.Router();

const EFETASKCSE = require("../models/EFE_TASK_CSE");

//handling POST request
router.post("/efetaskcse", async (req, res) => {
  try {
    const addEfetaskcseRecords = new EFETASKCSE(req.body);
    console.log(req.body);
    const insertEfetaskcse = await addEfetaskcseRecords.save();
    res.status(201).send(insertEfetaskcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/efetaskcse", async (req, res) => {
  try {
    const getEfetaskcse = await EFETASKCSE.find({});
    res.send(getEfetaskcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/efetaskcse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getEfetaskcse = await EFETASKCSE.findById({ _id });
    res.send(getEfetaskcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/efetaskcse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getEfetaskcse = await EFETASKCSE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getEfetaskcse);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/efetaskcse/:id", async (req, res) => {
  try {
    const getEfetaskcse = await EFETASKCSE.findByIdAndDelete(req.params.id);

    res.send(getEfetaskcse);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
