const express = require("express");
const router = new express.Router();

const COCSE = require("../models/CO_CSE");

//handling POST request
router.post("/cocse", async (req, res) => {
  try {
    const addCocseRecords = new COCSE(req.body);
    console.log(req.body);
    const insertCocse = await addCocseRecords.save();
    res.status(201).send(insertCocse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/cocse", async (req, res) => {
  try {
    const getCocse = await COCSE.find({});
    res.send(getCocse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/cocse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getCocse = await COCSE.findById({ _id });
    res.send(getCocse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/cocse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getCocse = await COCSE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getCocse);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/cocse/:id", async (req, res) => {
  try {
    const getCocse = await COCSE.findByIdAndDelete(req.params.id);

    res.send(getCocse);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
