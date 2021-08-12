const express = require("express");
const router = new express.Router();

const ECTTASKEE = require("../models/EE/ECT_TASK_EE");

//handling POST request
router.post("/ecttaskee", async (req, res) => {
  try {
    const addECTTASKEERecords = new ECTTASKEE(req.body);
    console.log(req.body);
    const insertECTTASKEE = await addECTTASKEERecords.save();
    res.status(201).send(insertECTTASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/ecttaskee", async (req, res) => {
  try {
    const getECTTASKEE = await ECTTASKEE.find({});
    res.send(getECTTASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/ecttaskee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getECTTASKEE = await ECTTASKEE.findById({ _id });
    res.send(getECTTASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/ecttaskee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getECTTASKEE = await ECTTASKEE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getECTTASKEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/ecttaskee/:id", async (req, res) => {
  try {
    const getECTTASKEE = await ECTTASKEE.findByIdAndDelete(req.params.id);

    res.send(getECTTASKEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
