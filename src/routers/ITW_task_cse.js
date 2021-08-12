const express = require("express");
const router = new express.Router();

const ITWTASKCSE = require("../models/ITW_TASK_CSE");

//handling POST request
router.post("/itwtaskcse", async (req, res) => {
  try {
    const addItwtaskcseRecords = new ITWTASKCSE(req.body);
    console.log(req.body);
    const insertItwtaskcse = await addItwtaskcseRecords.save();
    res.status(201).send(insertItwtaskcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/itwtaskcse", async (req, res) => {
  try {
    const getItwtaskcse = await ITWTASKCSE.find({});
    res.send(getItwtaskcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/itwtaskcse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getItwtaskcse = await ITWTASKCSE.findById({ _id });
    res.send(getItwtaskcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/itwtaskcse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getItwtaskcse = await ITWTASKCSE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getItwtaskcse);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/itwtaskcse/:id", async (req, res) => {
  try {
    const getItwtaskcse = await ITWTASKCSE.findByIdAndDelete(req.params.id);

    res.send(getItwtaskcse);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
