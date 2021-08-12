const express = require("express");
const router = new express.Router();

const MATHTASKIT = require("../models/It/MATH_TASK_IT");

//handling POST request
router.post("/mathtaskit", async (req, res) => {
  try {
    const addMathtaskitRecords = new MATHTASKIT(req.body);
    console.log(req.body);
    const insertMathtaskit = await addMathtaskitRecords.save();
    res.status(201).send(insertMathtaskit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/mathtaskit", async (req, res) => {
  try {
    const getMathtaskit = await MATHTASKIT.find({});
    res.send(getMathtaskit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/mathtaskit/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMathtaskit = await MATHTASKIT.findById({ _id });
    res.send(getMathtaskit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/mathtaskit/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMathtaskit = await MATHTASKIT.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getMathtaskit);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/mathtaskit/:id", async (req, res) => {
  try {
    const getMathtaskit = await MATHTASKIT.findByIdAndDelete(req.params.id);

    res.send(getMathtaskit);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
