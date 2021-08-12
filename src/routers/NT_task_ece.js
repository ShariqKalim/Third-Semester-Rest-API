const express = require("express");
const router = new express.Router();

const NTTASKECE = require("../models/ECE/NT_TASK_ECE");

//handling POST request
router.post("/nttaskece", async (req, res) => {
  try {
    const addNTTASKECERecords = new NTTASKECE(req.body);
    console.log(req.body);
    const insertNTTASKECE = await addNTTASKECERecords.save();
    res.status(201).send(insertNTTASKECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/nttaskece", async (req, res) => {
  try {
    const getNTTASKECE = await NTTASKECE.find({});
    res.send(getNTTASKECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/nttaskece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getNTTASKECE = await NTTASKECE.findById({ _id });
    res.send(getNTTASKECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/nttaskece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getNTTASKECE = await NTTASKECE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getNTTASKECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/nttaskece/:id", async (req, res) => {
  try {
    const getNTTASKECE = await NTTASKECE.findByIdAndDelete(req.params.id);

    res.send(getNTTASKECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
