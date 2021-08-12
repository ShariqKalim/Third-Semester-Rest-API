const express = require("express");
const router = new express.Router();

const COTASKCSE = require("../models/CO_TASK_CSE");

//handling POST request
router.post("/cotaskcse", async (req, res) => {
  try {
    const addCotaskcseRecords = new COTASKCSE(req.body);
    console.log(req.body);
    const insertCotaskcse = await addCotaskcseRecords.save();
    res.status(201).send(insertCotaskcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/cotaskcse", async (req, res) => {
  try {
    const getCotaskcse = await COTASKCSE.find({});
    res.send(getCotaskcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/cotaskcse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getCotaskcse = await COTASKCSE.findById({ _id });
    res.send(getCotaskcse);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/cotaskcse/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getCotaskcse = await COTASKCSE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getCotaskcse);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/cotaskcse/:id", async (req, res) => {
  try {
    const getCotaskcse = await COTASKCSE.findByIdAndDelete(req.params.id);

    res.send(getCotaskcse);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
