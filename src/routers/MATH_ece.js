const express = require("express");
const router = new express.Router();

const MATHECE = require("../models/ECE/MATH_ECE");

//handling POST request
router.post("/mathece", async (req, res) => {
  try {
    const addMATHECERecords = new MATHECE(req.body);
    console.log(req.body);
    const insertMATHECE = await addMATHECERecords.save();
    res.status(201).send(insertMATHECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/mathece", async (req, res) => {
  try {
    const getMATHECE = await MATHECE.find({});
    res.send(getMATHECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/mathece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMATHECE = await MATHECE.findById({ _id });
    res.send(getMATHECE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/mathece/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMATHECE = await MATHECE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getMATHECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/mathece/:id", async (req, res) => {
  try {
    const getMATHECE = await MATHECE.findByIdAndDelete(req.params.id);

    res.send(getMATHECE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
