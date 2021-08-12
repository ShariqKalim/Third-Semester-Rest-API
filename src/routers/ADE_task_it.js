const express = require("express");
const router = new express.Router();

const ADETASKIT = require("../models/It/ADE_TASK_IT");

//handling POST request
router.post("/adetaskit", async (req, res) => {
  try {
    const addAdetaskitRecords = new ADETASKIT(req.body);
    console.log(req.body);
    const insertAdetaskit = await addAdetaskitRecords.save();
    res.status(201).send(insertAdetaskit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/adetaskit", async (req, res) => {
  try {
    const getAdetaskit = await ADETASKIT.find({});
    res.send(getAdetaskit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/adetaskit/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getAdetaskit = await ADETASKIT.findById({ _id });
    res.send(getAdetaskit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/adetaskit/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getAdetaskit = await ADETASKIT.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getAdetaskit);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/adetaskit/:id", async (req, res) => {
  try {
    const getAdetaskit = await ADETASKIT.findByIdAndDelete(req.params.id);

    res.send(getAdetaskit);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
