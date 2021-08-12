const express = require("express");
const router = new express.Router();

const DSAECE = require("../models/ECE/DSA_ECE");

//handling POST request
router.post("/dsaece", async (req, res) => {
  try {
    const addDSAECERecords = new DSAECE(req.body);
    console.log(req.body);
    const insertDSAECE = await addDSAECERecords.save();
    res.status(201).send(insertDSAECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/dsaece", async (req, res) => {
  try {
    const getDSAECE = await DSAECE.find({});
    res.send(getDSAECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/dsaece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getDSAECE = await DSAECE.findById({ _id });
    res.send(getDSAECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/dsaece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getDSAECE = await DSAECE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getDSAECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/dsaece/:id", async (req, res) => {
  try {
    const getDSAECE = await DSAECE.findByIdAndDelete(req.params.id);

    res.send(getDSAECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
