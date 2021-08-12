const express = require("express");
const router = new express.Router();

const SSTASKECE = require("../models/ECE/SS_TASK_ECE");

//handling POST request
router.post("/sstaskece", async (req, res) => {
  try {
    const addSSTASKECERecords = new SSTASKECE(req.body);
    console.log(req.body);
    const insertSSTASKECE = await addSSTASKECERecords.save();
    res.status(201).send(insertSSTASKECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/sstaskece", async (req, res) => {
  try {
    const getSSTASKECE = await SSTASKECE.find({});
    res.send(getSSTASKECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/sstaskece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getSSTASKECE = await SSTASKECE.findById({ _id });
    res.send(getSSTASKECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/sstaskece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getSSTASKECE = await SSTASKECE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getSSTASKECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/sstaskece/:id", async (req, res) => {
  try {
    const getSSTASKECE = await SSTASKECE.findByIdAndDelete(req.params.id);

    res.send(getSSTASKECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
