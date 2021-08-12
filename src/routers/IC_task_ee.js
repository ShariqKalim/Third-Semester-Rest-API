const express = require("express");
const router = new express.Router();

const ICTASKEE = require("../models/EE/IC_TASK_EE");

//handling POST request
router.post("/ictaskee", async (req, res) => {
  try {
    const addICTASKEERecords = new ICTASKEE(req.body);
    console.log(req.body);
    const insertICTASKEE = await addICTASKEERecords.save();
    res.status(201).send(insertICTASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/ictaskee", async (req, res) => {
  try {
    const getICTASKEE = await ICTASKEE.find({});
    res.send(getICTASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/ictaskee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getICTASKEE = await ICTASKEE.findById({ _id });
    res.send(getICTASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/ictaskee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getICTASKEE = await ICTASKEE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getICTASKEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/ictaskee/:id", async (req, res) => {
  try {
    const getICTASKEE = await ICTASKEE.findByIdAndDelete(req.params.id);

    res.send(getICTASKEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
