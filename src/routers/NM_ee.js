const express = require("express");
const router = new express.Router();

const NMEE = require("../models/EE/NM_EE");

//handling POST request
router.post("/nmee", async (req, res) => {
  try {
    const addNMEERecords = new NMEE(req.body);
    console.log(req.body);
    const insertNMEE = await addNMEERecords.save();
    res.status(201).send(insertNMEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/nmee", async (req, res) => {
  try {
    const getNMEE = await NMEE.find({});
    res.send(getNMEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/nmee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getNMEE = await NMEE.findById({ _id });
    res.send(getNMEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/nmee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getNMEE = await NMEE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getNMEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/nmee/:id", async (req, res) => {
  try {
    const getNMEE = await NMEE.findByIdAndDelete(req.params.id);

    res.send(getNMEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
