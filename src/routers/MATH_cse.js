const express = require("express");
const router = new express.Router();

const MATHCSE = require("../models/MATH_CSE");

//handling POST request
router.post("/mathcse", async (req, res) => {
  try {
    const addMathcseRecords = new MATHCSE(req.body);
    console.log(req.body);
    const insertMathcse = await addMathcseRecords.save();
    res.status(201).send(insertMathcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/mathcse", async (req, res) => {
  try {
    const getMathcse = await MATHCSE.find({});
    res.send(getMathcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/mathcse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMathcse = await MATHCSE.findById({ _id });
    res.send(getMathcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/mathcse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMathcse = await MATHCSE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getMathcse);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/mathcse/:id", async (req, res) => {
  try {
    const getMathcse = await MATHCSE.findByIdAndDelete(req.params.id);

    res.send(getMathcse);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
