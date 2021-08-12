const express = require("express");
const router = new express.Router();

const COTASKIT = require("../models/It/CO_TASK_IT");

//handling POST request
router.post("/cotaskit", async (req, res) => {
  try {
    const addCotaskitRecords = new COTASKIT(req.body);
    console.log(req.body);
    const insertCotaskit = await addCotaskitRecords.save();
    res.status(201).send(insertCotaskit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/cotaskit", async (req, res) => {
  try {
    const getCotaskit = await COTASKIT.find({});
    res.send(getCotaskit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/cotaskit/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getCotaskit = await COTASKIT.findById({ _id });
    res.send(getCotaskit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/cotaskit/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getCotaskit = await COTASKIT.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getCotaskit);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/cotaskit/:id", async (req, res) => {
  try {
    const getCotaskit = await COTASKIT.findByIdAndDelete(req.params.id);

    res.send(getCotaskit);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
