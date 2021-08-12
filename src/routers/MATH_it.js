const express = require("express");
const router = new express.Router();

const MATHIT = require("../models/It/MATH_IT");

//handling POST request
router.post("/mathit", async (req, res) => {
  try {
    const addMathitRecords = new MATHIT(req.body);
    console.log(req.body);
    const insertMathit = await addMathitRecords.save();
    res.status(201).send(insertMathit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/mathit", async (req, res) => {
  try {
    const getMathit = await MATHIT.find({});
    res.send(getMathit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/mathit/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMathit = await MATHIT.findById({ _id });
    res.send(getMathit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/mathit/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMathit = await MATHIT.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getMathit);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/mathit/:id", async (req, res) => {
  try {
    const getMathit = await MATHIT.findByIdAndDelete(req.params.id);

    res.send(getMathit);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
