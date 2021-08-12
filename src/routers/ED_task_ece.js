const express = require("express");
const router = new express.Router();

const EDTASKECE = require("../models/ECE/ED_TASK_ECE");

//handling POST request
router.post("/edtaskece", async (req, res) => {
  try {
    const addEDTASKECERecords = new EDTASKECE(req.body);
    console.log(req.body);
    const insertEDTASKECE = await addEDTASKECERecords.save();
    res.status(201).send(insertEDTASKECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/edtaskece", async (req, res) => {
  try {
    const getEDTASKECE = await EDTASKECE.find({});
    res.send(getEDTASKECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/edtaskece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getEDTASKECE = await EDTASKECE.findById({ _id });
    res.send(getEDTASKECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/edtaskece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getEDTASKECE = await EDTASKECE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getEDTASKECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/edtaskece/:id", async (req, res) => {
  try {
    const getEDTASKECE = await EDTASKECE.findByIdAndDelete(req.params.id);

    res.send(getEDTASKECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
