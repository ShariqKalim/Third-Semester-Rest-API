const express = require("express");
const router = new express.Router();

const ADEIT = require("../models/It/ADE_IT");

//handling POST request
router.post("/adeit", async (req, res) => {
  try {
    const addAdeitRecords = new ADEIT(req.body);
    console.log(req.body);
    const insertAdeit = await addAdeitRecords.save();
    res.status(201).send(insertAdeit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/adeit", async (req, res) => {
  try {
    const getAdeit = await ADEIT.find({});
    res.send(getAdeit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/adeit/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getAdeit = await ADEIT.findById({ _id });
    res.send(getAdeit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/adeit/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getAdeit = await ADEIT.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getAdeit);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/adeit/:id", async (req, res) => {
  try {
    const getAdeit = await ADEIT.findByIdAndDelete(req.params.id);

    res.send(getAdeit);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
