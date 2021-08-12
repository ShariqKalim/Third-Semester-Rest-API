const express = require("express");
const router = new express.Router();

const DSATASKECE = require("../models/ECE/DSA_TASK_ECE");

//handling POST request
router.post("/dsataskece", async (req, res) => {
  try {
    const addDSATASKECERecords = new DSATASKECE(req.body);
    console.log(req.body);
    const insertDSATASKECE = await addDSATASKECERecords.save();
    res.status(201).send(insertDSATASKECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/dsataskece", async (req, res) => {
  try {
    const getDSATASKECE = await DSATASKECE.find({});
    res.send(getDSATASKECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/dsataskece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getDSATASKECE = await DSATASKECE.findById({ _id });
    res.send(getDSATASKECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/dsataskece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getDSATASKECE = await DSATASKECE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getDSATASKECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/dsataskece/:id", async (req, res) => {
  try {
    const getDSATASKECE = await DSATASKECE.findByIdAndDelete(req.params.id);

    res.send(getDSATASKECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
