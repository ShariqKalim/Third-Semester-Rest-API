const express = require("express");
const router = new express.Router();

const ADECSE = require("../models/ADE_CSE");

//handling POST request
router.post("/adecse", async (req, res) => {
  try {
    const addAdecseRecords = new ADECSE(req.body);
    console.log(req.body);
    const insertAdecse = await addAdecseRecords.save();
    res.status(201).send(insertAdecse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/adecse", async (req, res) => {
  try {
    const getAdecse = await ADECSE.find({});
    res.send(getAdecse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/adecse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getAdecse = await ADECSE.findById({ _id });
    res.send(getAdecse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/adecse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getAdecse = await ADECSE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getAdecse);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/adecse/:id", async (req, res) => {
  try {
    const getAdecse = await ADECSE.findByIdAndDelete(req.params.id);

    res.send(getAdecse);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
