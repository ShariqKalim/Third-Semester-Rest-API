const express = require("express");
const router = new express.Router();

const EFETASKIT = require("../models/It/EFE_TASK_IT");

//handling POST request
router.post("/efetaskit", async (req, res) => {
  try {
    const addEfetaskitRecords = new EFETASKIT(req.body);
    console.log(req.body);
    const insertEfetaskit = await addEfetaskitRecords.save();
    res.status(201).send(insertEfetaskit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/efetaskit", async (req, res) => {
  try {
    const getEfetaskit = await EFETASKIT.find({});
    res.send(getEfetaskit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/efetaskit/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getEfetaskit = await EFETASKIT.findById({ _id });
    res.send(getEfetaskit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/efetaskit/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getEfetaskit = await EFETASKIT.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getEfetaskit);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/efetaskit/:id", async (req, res) => {
  try {
    const getEfetaskit = await EFETASKIT.findByIdAndDelete(req.params.id);

    res.send(getEfetaskit);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
