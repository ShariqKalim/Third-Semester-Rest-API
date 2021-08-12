const express = require("express");
const router = new express.Router();

const ESECE = require("../models/ECE/ES_ECE");

//handling POST request
router.post("/esece", async (req, res) => {
  try {
    const addESECERecords = new ESECE(req.body);
    console.log(req.body);
    const insertESECE = await addESECERecords.save();
    res.status(201).send(insertESECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/esece", async (req, res) => {
  try {
    const getESECE = await ESECE.find({});
    res.send(getESECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/esece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getESECE = await ESECE.findById({ _id });
    res.send(getESECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/esece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getESECE = await ESECE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getESECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/esece/:id", async (req, res) => {
  try {
    const getESECE = await ESECE.findByIdAndDelete(req.params.id);

    res.send(getESECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
