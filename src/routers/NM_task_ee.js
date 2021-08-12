const express = require("express");
const router = new express.Router();

const NMTASKEE = require("../models/EE/NM_TASK_EE");

//handling POST request
router.post("/nmtaskee", async (req, res) => {
  try {
    const addNMTASKEERecords = new NMTASKEE(req.body);
    console.log(req.body);
    const insertNMTASKEE = await addNMTASKEERecords.save();
    res.status(201).send(insertNMTASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/nmtaskee", async (req, res) => {
  try {
    const getNMTASKEE = await NMTASKEE.find({});
    res.send(getNMTASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/nmtaskee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getNMTASKEE = await NMTASKEE.findById({ _id });
    res.send(getNMTASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/nmtaskee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getNMTASKEE = await NMTASKEE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getNMTASKEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/nmtaskee/:id", async (req, res) => {
  try {
    const getNMTASKEE = await NMTASKEE.findByIdAndDelete(req.params.id);

    res.send(getNMTASKEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
