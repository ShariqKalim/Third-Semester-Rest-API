const express = require("express");
const router = new express.Router();

const DSDTASKECE = require("../models/ECE/DSD_TASK_ECE");

//handling POST request
router.post("/dsdtaskece", async (req, res) => {
  try {
    const addDSDTASKECERecords = new DSDTASKECE(req.body);
    console.log(req.body);
    const insertDSDTASKECE = await addDSDTASKECERecords.save();
    res.status(201).send(insertDSDTASKECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/dsdtaskece", async (req, res) => {
  try {
    const getDSDTASKECE = await DSDTASKECE.find({});
    res.send(getDSDTASKECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/dsdtaskece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getDSDTASKECE = await DSDTASKECE.findById({ _id });
    res.send(getDSDTASKECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/dsdtaskece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getDSDTASKECE = await DSDTASKECE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getDSDTASKECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/dsdtaskece/:id", async (req, res) => {
  try {
    const getDSDTASKECE = await DSDTASKECE.findByIdAndDelete(req.params.id);

    res.send(getDSDTASKECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
