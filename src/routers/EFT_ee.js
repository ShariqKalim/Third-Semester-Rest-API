const express = require("express");
const router = new express.Router();

const EFTEE = require("../models/EE/EFT_EE");

//handling POST request
router.post("/eftee", async (req, res) => {
  try {
    const addEFTEERecords = new EFTEE(req.body);
    console.log(req.body);
    const insertEFTEE = await addEFTEERecords.save();
    res.status(201).send(insertEFTEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/eftee", async (req, res) => {
  try {
    const getEFTEE = await EFTEE.find({});
    res.send(getEFTEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/eftee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getEFTEE = await EFTEE.findById({ _id });
    res.send(getEFTEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/eftee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getEFTEE = await EFTEE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getEFTEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/eftee/:id", async (req, res) => {
  try {
    const getEFTEE = await EFTEE.findByIdAndDelete(req.params.id);

    res.send(getEFTEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
