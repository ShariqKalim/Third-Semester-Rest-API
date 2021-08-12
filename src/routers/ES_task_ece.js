const express = require("express");
const router = new express.Router();

const ESTASKECE = require("../models/ECE/ES_TASK_ECE");

//handling POST request
router.post("/estaskece", async (req, res) => {
  try {
    const addESTASKECERecords = new ESTASKECE(req.body);
    console.log(req.body);
    const insertESTASKECE = await addESTASKECERecords.save();
    res.status(201).send(insertESTASKECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/estaskece", async (req, res) => {
  try {
    const getESTASKECE = await ESTASKECE.find({});
    res.send(getESTASKECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/estaskece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getESTASKECE = await ESTASKECE.findById({ _id });
    res.send(getESTASKECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/estaskece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getESTASKECE = await ESTASKECE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getESTASKECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/estaskece/:id", async (req, res) => {
  try {
    const getESTASKECE = await ESTASKECE.findByIdAndDelete(req.params.id);

    res.send(getESTASKECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
