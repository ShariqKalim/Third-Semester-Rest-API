const express = require("express");
const router = new express.Router();

const ADETASKCSE = require("../models/ADE_TASK_CSE");

//handling POST request
router.post("/adetaskcse", async (req, res) => {
  try {
    const addAdetaskcseRecords = new ADETASKCSE(req.body);
    console.log(req.body);
    const insertAdetaskcse = await addAdetaskcseRecords.save();
    res.status(201).send(insertAdetaskcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/adetaskcse", async (req, res) => {
  try {
    const getAdetaskcse = await ADETASKCSE.find({});
    res.send(getAdetaskcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/adetaskcse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getAdetaskcse = await ADETASKCSE.findById({ _id });
    res.send(getAdetaskcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/adetaskcse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getAdetaskcse = await ADETASKCSE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getAdetaskcse);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/adetaskcse/:id", async (req, res) => {
  try {
    const getAdetaskcse = await ADETASKCSE.findByIdAndDelete(req.params.id);

    res.send(getAdetaskcse);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
