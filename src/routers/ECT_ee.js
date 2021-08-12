const express = require("express");
const router = new express.Router();

const ECTEE = require("../models/EE/ECT_EE");

//handling POST request
router.post("/ectee", async (req, res) => {
  try {
    const addECTEERecords = new ECTEE(req.body);
    console.log(req.body);
    const insertECTEE = await addECTEERecords.save();
    res.status(201).send(insertECTEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/ectee", async (req, res) => {
  try {
    const getECTEE = await ECTEE.find({});
    res.send(getECTEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/ectee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getECTEE = await ECTEE.findById({ _id });
    res.send(getECTEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/ectee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getECTEE = await ECTEE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getECTEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/ectee/:id", async (req, res) => {
  try {
    const getECTEE = await ECTEE.findByIdAndDelete(req.params.id);

    res.send(getECTEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
