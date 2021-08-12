const express = require("express");
const router = new express.Router();

const ITWTASKIT = require("../models/It/ITW_TASK_IT");

//handling POST request
router.post("/itwtaskit", async (req, res) => {
  try {
    const addItwtaskitRecords = new ITWTASKIT(req.body);
    console.log(req.body);
    const insertItwtaskit = await addItwtaskitRecords.save();
    res.status(201).send(insertItwtaskit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/itwtaskit", async (req, res) => {
  try {
    const getItwtaskit = await ITWTASKIT.find({});
    res.send(getItwtaskit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/itwtaskit/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getItwtaskit = await ITWTASKIT.findById({ _id });
    res.send(getItwtaskit);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/itwtaskit/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getItwtaskit = await ITWTASKIT.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getItwtaskit);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/itwtaskit/:id", async (req, res) => {
  try {
    const getItwtaskit = await ITWTASKIT.findByIdAndDelete(req.params.id);

    res.send(getItwtaskit);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
