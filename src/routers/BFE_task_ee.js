const express = require("express");
const router = new express.Router();

const BFETASKEE = require("../models/EE/BFE_TASK_EE");

//handling POST request
router.post("/bfetaskee", async (req, res) => {
  try {
    const addBFETASKEERecords = new BFETASKEE(req.body);
    console.log(req.body);
    const insertBFETASKEE = await addBFETASKEERecords.save();
    res.status(201).send(insertBFETASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/bfetaskee", async (req, res) => {
  try {
    const getBFETASKEE = await BFETASKEE.find({});
    res.send(getBFETASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/bfetaskee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getBFETASKEE = await BFETASKEE.findById({ _id });
    res.send(getBFETASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/bfetaskee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getBFETASKEE = await BFETASKEE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getBFETASKEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/bfetaskee/:id", async (req, res) => {
  try {
    const getBFETASKEE = await BFETASKEE.findByIdAndDelete(req.params.id);

    res.send(getBFETASKEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
