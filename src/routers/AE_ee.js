const express = require("express");
const router = new express.Router();

const AEEE = require("../models/EE/AE_EE");

//handling POST request
router.post("/aeee", async (req, res) => {
  try {
    const addAEEERecords = new AEEE(req.body);
    console.log(req.body);
    const insertAEEE = await addAEEERecords.save();
    res.status(201).send(insertAEEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/aeee", async (req, res) => {
  try {
    const getAEEE = await AEEE.find({});
    res.send(getAEEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/aeee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getAEEE = await AEEE.findById({ _id });
    res.send(getAEEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/aeee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getAEEE = await AEEE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getAEEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/aeee/:id", async (req, res) => {
  try {
    const getAEEE = await AEEE.findByIdAndDelete(req.params.id);

    res.send(getAEEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
