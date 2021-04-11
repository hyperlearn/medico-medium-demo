const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Clinic = new Schema({
  name: { type: String, required: true },
}, {
  timestamps: true,
});

module.exports = Clinic;