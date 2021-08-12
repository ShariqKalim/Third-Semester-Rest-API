const express = require("express");
const router = new express.Router();

const EFECSE = require("../models/EFE_CSE");

//handling POST request
router.post("/efecse", async (req, res) => {
  try {
    const addEfecseRecords = new EFECSE(req.body);
    console.log(req.body);
    const insertEfecse = await addEfecseRecords.save();
    res.status(201).send(insertEfecse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/efecse", async (req, res) => {
  try {
    const getEfecse = await EFECSE.find({});
    res.send(getEfecse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/efecse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getEfecse = await EFECSE.findById({ _id });
    res.send(getEfecse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/efecse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getEfecse = await EFECSE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getEfecse);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/efecse/:id", async (req, res) => {
  try {
    const getEfecse = await EFECSE.findByIdAndDelete(req.params.id);

    res.send(getEfecse);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
