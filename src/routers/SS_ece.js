const express = require("express");
const router = new express.Router();

const SSECE = require("../models/ECE/SS_ECE");

//handling POST request
router.post("/ssece", async (req, res) => {
  try {
    const addSSECERecords = new SSECE(req.body);
    console.log(req.body);
    const insertSSECE = await addSSECERecords.save();
    res.status(201).send(insertSSECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/ssece", async (req, res) => {
  try {
    const getSSECE = await SSECE.find({});
    res.send(getSSECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/ssece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getSSECE = await SSECE.findById({ _id });
    res.send(getSSECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/ssece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getSSECE = await SSECE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getSSECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/ssece/:id", async (req, res) => {
  try {
    const getSSECE = await SSECE.findByIdAndDelete(req.params.id);

    res.send(getSSECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
