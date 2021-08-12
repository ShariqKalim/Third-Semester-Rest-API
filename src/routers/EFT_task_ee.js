const express = require("express");
const router = new express.Router();

const EFTTASKEE = require("../models/EE/EFT_TASK_EE");

//handling POST request
router.post("/efttaskee", async (req, res) => {
  try {
    const addEFTTASKEERecords = new EFTTASKEE(req.body);
    console.log(req.body);
    const insertEFTTASKEE = await addEFTTASKEERecords.save();
    res.status(201).send(insertEFTTASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/efttaskee", async (req, res) => {
  try {
    const getEFTTASKEE = await EFTTASKEE.find({});
    res.send(getEFTTASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/efttaskee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getEFTTASKEE = await EFTTASKEE.findById({ _id });
    res.send(getEFTTASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/efttaskee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getEFTTASKEE = await EFTTASKEE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getEFTTASKEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/efttaskee/:id", async (req, res) => {
  try {
    const getEFTTASKEE = await EFTTASKEE.findByIdAndDelete(req.params.id);

    res.send(getEFTTASKEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
