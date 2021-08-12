const express = require("express");
const router = new express.Router();

const EMTASKEE = require("../models/EE/EM_TASK_EE");

//handling POST request
router.post("/emtaskee", async (req, res) => {
  try {
    const addEMTASKEERecords = new EMTASKEE(req.body);
    console.log(req.body);
    const insertEMTASKEE = await addEMTASKEERecords.save();
    res.status(201).send(insertEMTASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/emtaskee", async (req, res) => {
  try {
    const getEMTASKEE = await EMTASKEE.find({});
    res.send(getEMTASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/emtaskee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getEMTASKEE = await EMTASKEE.findById({ _id });
    res.send(getEMTASKEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/emtaskee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getEMTASKEE = await EMTASKEE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getEMTASKEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/emtaskee/:id", async (req, res) => {
  try {
    const getEMTASKEE = await EMTASKEE.findByIdAndDelete(req.params.id);

    res.send(getEMTASKEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
