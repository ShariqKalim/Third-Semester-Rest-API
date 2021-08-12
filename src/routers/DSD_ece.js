const express = require("express");
const router = new express.Router();

const DSDECE = require("../models/ECE/DSD_ECE");

//handling POST request
router.post("/dsdece", async (req, res) => {
  try {
    const addDSDECERecords = new DSDECE(req.body);
    console.log(req.body);
    const insertDSDECE = await addDSDECERecords.save();
    res.status(201).send(insertDSDECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/dsdece", async (req, res) => {
  try {
    const getDSDECE = await DSDECE.find({});
    res.send(getDSDECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/dsdece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getDSDECE = await DSDECE.findById({ _id });
    res.send(getDSDECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/dsdece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getDSDECE = await DSDECE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getDSDECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/dsdece/:id", async (req, res) => {
  try {
    const getDSDECE = await DSDECE.findByIdAndDelete(req.params.id);

    res.send(getDSDECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
