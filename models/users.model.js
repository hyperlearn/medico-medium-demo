const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  gender: { type: String, requied: true, enum: ['male', 'female'] },
  password: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  type: { type: String, required: true, enum: ['PATIENT', 'ASSISTANT', 'DOCTOR'] },
  clinicId: { type: ObjectId }
}, {
  timestamps: true,
});

module.exports = User;