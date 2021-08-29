const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const AccomplishmentSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required:true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
module.exports = Accomplishment = mongoose.model("accomplishments", AccomplishmentSchema);