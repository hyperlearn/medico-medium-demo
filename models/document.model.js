const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const File = new Schema({
  name: { type: String, required: true },
  owner: { type: ObjectId, required: true },
  url: { type: String, required: true },
  appointmentId: { type: ObjectId, required: true },
  isShared: { type: Boolean, required: true },
}, {
  timestamps: true,
});

module.exports = File;