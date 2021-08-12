const express = require("express");
const router = new express.Router();

const BFEEE = require("../models/EE/BFE_EE");

//handling POST request
router.post("/bfeee", async (req, res) => {
  try {
    const addBFEEERecords = new BFEEE(req.body);
    console.log(req.body);
    const insertBFEEE = await addBFEEERecords.save();
    res.status(201).send(insertBFEEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/bfeee", async (req, res) => {
  try {
    const getBFEEE = await BFEEE.find({});
    res.send(getBFEEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/bfeee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getBFEEE = await BFEEE.findById({ _id });
    res.send(getBFEEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/bfeee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getBFEEE = await BFEEE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getBFEEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/bfeee/:id", async (req, res) => {
  try {
    const getBFEEE = await BFEEE.findByIdAndDelete(req.params.id);

    res.send(getBFEEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
