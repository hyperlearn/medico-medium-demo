const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Appointment = new Schema({
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  agenda: { type: String, required: true },
  description: { type: String },
  participants: [{ type: ObjectId }],
  status: { type: String, required: true, enum: ['PENDING', 'ONGOING', 'COMPLETED', 'CANCELLED']},
  isDeleted: { type: Boolean },
  clinicId: ObjectId
}, {
  timestamps: true,
});

module.exports = Appointment;