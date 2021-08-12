const express = require("express");
const router = new express.Router();

const EMEE = require("../models/EE/EM_EE");

//handling POST request
router.post("/emee", async (req, res) => {
  try {
    const addEMEERecords = new EMEE(req.body);
    console.log(req.body);
    const insertEMEE = await addEMEERecords.save();
    res.status(201).send(insertEMEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/emee", async (req, res) => {
  try {
    const getEMEE = await EMEE.find({});
    res.send(getEMEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/emee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getEMEE = await EMEE.findById({ _id });
    res.send(getEMEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/emee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getEMEE = await EMEE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getEMEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/emee/:id", async (req, res) => {
  try {
    const getEMEE = await EMEE.findByIdAndDelete(req.params.id);

    res.send(getEMEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
