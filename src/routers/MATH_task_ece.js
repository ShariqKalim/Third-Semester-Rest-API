const express = require("express");
const router = new express.Router();

const MATHTASKECE = require("../models/ECE/MATH_TASK_ECE");

//handling POST request
router.post("/mathtaskece", async (req, res) => {
  try {
    const addMATHTASKECERecords = new MATHTASKECE(req.body);
    console.log(req.body);
    const insertMATHTASKECE = await addMATHTASKECERecords.save();
    res.status(201).send(insertMATHTASKECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/mathtaskece", async (req, res) => {
  try {
    const getMATHTASKECE = await MATHTASKECE.find({});
    res.send(getMATHTASKECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/mathtaskece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMATHTASKECE = await MATHTASKECE.findById({ _id });
    res.send(getMATHTASKECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/mathtaskece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMATHTASKECE = await MATHTASKECE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getMATHTASKECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/mathtaskece/:id", async (req, res) => {
  try {
    const getMATHTASKECE = await MATHTASKECE.findByIdAndDelete(req.params.id);

    res.send(getMATHTASKECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
