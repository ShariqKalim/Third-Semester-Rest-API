const express = require("express");
const router = new express.Router();

const DSATASKIT = require("../models/It/DSA_TASK_IT");

//handling POST request
router.post("/dsataskit", async (req, res) => {
  try {
    const addDsataskitRecords = new DSATASKIT(req.body);
    console.log(req.body);
    const insertDsataskit = await addDsataskitRecords.save();
    res.status(201).send(insertDsataskit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/dsataskit", async (req, res) => {
  try {
    const getDsataskit = await DSATASKIT.find({});
    res.send(getDsataskit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/dsataskit/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getDsataskit = await DSATASKIT.findById({ _id });
    res.send(getDsataskit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/dsataskit/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getDsataskit = await DSATASKIT.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getDsataskit);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/dsataskit/:id", async (req, res) => {
  try {
    const getDsataskit = await DSATASKIT.findByIdAndDelete(req.params.id);

    res.send(getDsataskit);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
