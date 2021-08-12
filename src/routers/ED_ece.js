const express = require("express");
const router = new express.Router();

const EDECE = require("../models/ECE/ED_ECE");

//handling POST request
router.post("/edece", async (req, res) => {
  try {
    const addEDECERecords = new EDECE(req.body);
    console.log(req.body);
    const insertEDECE = await addEDECERecords.save();
    res.status(201).send(insertEDECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/edece", async (req, res) => {
  try {
    const getEDECE = await EDECE.find({});
    res.send(getEDECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/edece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getEDECE = await EDECE.findById({ _id });
    res.send(getEDECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/edece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getEDECE = await EDECE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getEDECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/edece/:id", async (req, res) => {
  try {
    const getEDECE = await EDECE.findByIdAndDelete(req.params.id);

    res.send(getEDECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
