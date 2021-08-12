const express = require("express");
const router = new express.Router();

const EFEIT = require("../models/It/EFE_IT");

//handling POST request
router.post("/efeit", async (req, res) => {
  try {
    const addEfeitRecords = new EFEIT(req.body);
    console.log(req.body);
    const insertEfeit = await addEfeitRecords.save();
    res.status(201).send(insertEfeit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/efeit", async (req, res) => {
  try {
    const getEfeit = await EFEIT.find({});
    res.send(getEfeit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/efeit/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getEfeit = await EFEIT.findById({ _id });
    res.send(getEfeit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/efeit/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getEfeit = await EFEIT.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getEfeit);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/efeit/:id", async (req, res) => {
  try {
    const getEfeit = await EFEIT.findByIdAndDelete(req.params.id);

    res.send(getEfeit);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
