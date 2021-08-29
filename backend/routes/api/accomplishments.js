const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
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

router.route("/getAll").get(async (req, res) => {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const dbo = client.db("TechNova2021");
    dbo
      .collection("accomplishments")
      .find({})
      .toArray(function (err, result) {
        res.json(result);
      });
  } catch (err) {
    console.error(err);
  }
});

// GET ALL ACCOMPLISHMENTS FROM USER 
router.route("/getUserAccomplishments").post(async (req, res) => {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const dbo = client.db("TechNova2021");
    dbo
      .collection("accomplishments")
      .find({ name: req.body.email })
      .toArray(function (err, result) {
        res.json(result);
      });
  } catch (err) {
    console.log(err);
  }
});



module.exports = router;