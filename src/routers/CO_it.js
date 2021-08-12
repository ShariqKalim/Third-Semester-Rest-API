const express = require("express");
const router = new express.Router();

const COIT = require("../models/It/CO_IT");

//handling POST request
router.post("/coit", async (req, res) => {
  try {
    const addCoitRecords = new COIT(req.body);
    console.log(req.body);
    const insertCoit = await addCoitRecords.save();
    res.status(201).send(insertCoit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/coit", async (req, res) => {
  try {
    const getCoit = await COIT.find({});
    res.send(getCoit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/coit/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getCoit = await COIT.findById({ _id });
    res.send(getCoit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/coit/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getCoit = await COIT.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getCoit);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/coit/:id", async (req, res) => {
  try {
    const getCoit = await COIT.findByIdAndDelete(req.params.id);

    res.send(getCoit);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
