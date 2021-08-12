const express = require("express");
const router = new express.Router();

const ITWIT = require("../models/It/ITW_IT");

//handling POST request
router.post("/itwit", async (req, res) => {
  try {
    const addItwitRecords = new ITWIT(req.body);
    console.log(req.body);
    const insertItwit = await addItwitRecords.save();
    res.status(201).send(insertItwit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/itwit", async (req, res) => {
  try {
    const getItwit = await ITWIT.find({});
    res.send(getItwit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/itwit/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getItwit = await ITWIT.findById({ _id });
    res.send(getItwit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/itwit/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getItwit = await ITWIT.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getItwit);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/itwit/:id", async (req, res) => {
  try {
    const getItwit = await ITWIT.findByIdAndDelete(req.params.id);

    res.send(getItwit);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
