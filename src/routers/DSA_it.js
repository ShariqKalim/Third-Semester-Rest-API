const express = require("express");
const router = new express.Router();

const DSAIT = require("../models/It/DSA_IT");

//handling POST request
router.post("/dsait", async (req, res) => {
  try {
    const addDsaitRecords = new DSAIT(req.body);
    console.log(req.body);
    const insertDsait = await addDsaitRecords.save();
    res.status(201).send(insertDsait);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/dsait", async (req, res) => {
  try {
    const getDsait = await DSAIT.find({});
    res.send(getDsait);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/dsait/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getDsait = await DSAIT.findById({ _id });
    res.send(getDsait);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/dsait/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getDsait = await DSAIT.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getDsait);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/dsait/:id", async (req, res) => {
  try {
    const getDsait = await DSAIT.findByIdAndDelete(req.params.id);

    res.send(getDsait);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
