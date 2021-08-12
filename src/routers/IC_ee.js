const express = require("express");
const router = new express.Router();

const ICEE = require("../models/EE/IC_EE");

//handling POST request
router.post("/icee", async (req, res) => {
  try {
    const addICEERecords = new ICEE(req.body);
    console.log(req.body);
    const insertICEE = await addICEERecords.save();
    res.status(201).send(insertICEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/icee", async (req, res) => {
  try {
    const getICEE = await ICEE.find({});
    res.send(getICEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/icee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getICEE = await ICEE.findById({ _id });
    res.send(getICEE);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/icee/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getICEE = await ICEE.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getICEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/icee/:id", async (req, res) => {
  try {
    const getICEE = await ICEE.findByIdAndDelete(req.params.id);

    res.send(getICEE);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
