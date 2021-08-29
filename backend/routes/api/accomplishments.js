const express = require("express");
const router = express.Router();

// Load Accomplishment model
const Accomplishment = require("../../models/Accomplishment");

router.post("/addItem", (req, res) => {
    const newAccomplishment = new Accomplishment({
        email: req.body.email,
        title: req.body.title,
        date: req.body.date,
        type: req.body.type,
        description: req.body.description
      });

    newAccomplishment
      .save()
      .then(accomplishment => res.json(accomplishment))
});
  module.exports = router;