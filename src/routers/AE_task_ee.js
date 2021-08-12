const express = require("express");
const router = new express.Router();

const AETASKEE = require("../models/EE/AE_TASK_EE");

//handling POST request
router.post("/aetaskee", async (req, res) => {
  try {
    const addAETASKEERecords = new AETASKEE(req.body);
    console.log(req.body);
    const insertAETASKEE = await addAETASKEERecords.save();
    res.status(201).send(insertAETASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/aetaskee", async (req, res) => {
  try {
    const getAETASKEE = await AETASKEE.find({});
    res.send(getAETASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/aetaskee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getAETASKEE = await AETASKEE.findById({ _id });
    res.send(getAETASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/aetaskee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getAETASKEE = await AETASKEE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getAETASKEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/aetaskee/:id", async (req, res) => {
  try {
    const getAETASKEE = await AETASKEE.findByIdAndDelete(req.params.id);

    res.send(getAETASKEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
