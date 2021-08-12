const express = require("express");
const router = new express.Router();

const ITWCSE = require("../models/ITW_CSE");

//handling POST request
router.post("/itwcse", async (req, res) => {
  try {
    const addItwcseRecords = new ITWCSE(req.body);
    console.log(req.body);
    const insertItwcse = await addItwcseRecords.save();
    res.status(201).send(insertItwcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/itwcse", async (req, res) => {
  try {
    const getItwcse = await ITWCSE.find({});
    res.send(getItwcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/itwcse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getItwcse = await ITWCSE.findById({ _id });
    res.send(getItwcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/itwcse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getItwcse = await ITWCSE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getItwcse);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/itwcse/:id", async (req, res) => {
  try {
    const getItwcse = await ITWCSE.findByIdAndDelete(req.params.id);

    res.send(getItwcse);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
