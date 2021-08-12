const express = require("express");
const router = new express.Router();

const NTECE = require("../models/ECE/NT_ECE");

//handling POST request
router.post("/ntece", async (req, res) => {
  try {
    const addNTECERecords = new NTECE(req.body);
    console.log(req.body);
    const insertNTECE = await addNTECERecords.save();
    res.status(201).send(insertNTECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/ntece", async (req, res) => {
  try {
    const getNTECE = await NTECE.find({});
    res.send(getNTECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/ntece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getNTECE = await NTECE.findById({ _id });
    res.send(getNTECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/ntece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getNTECE = await NTECE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getNTECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/ntece/:id", async (req, res) => {
  try {
    const getNTECE = await NTECE.findByIdAndDelete(req.params.id);

    res.send(getNTECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
