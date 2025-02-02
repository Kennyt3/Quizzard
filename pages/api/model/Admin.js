const mongoose = require('mongoose')
const { Schema } = mongoose

const AdminSchema = new Schema({
  name: { type: String },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
    sparse: true,
  },
  password: { type: String, required: true },
})

const AdminModel = mongoose.models.Admin || mongoose.model('Admin', AdminSchema)

module.exports = AdminModel
