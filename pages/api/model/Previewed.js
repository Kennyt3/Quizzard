const mongoose = require('mongoose')
const { Schema } = mongoose

const PreviewedSchema = new Schema(
  {
    title: String,
    link: String,
    locale: String,
    name: String,
    date: String,
    summary: String,
    content: String,
    cover: String,
    author: { type: Schema.Types.ObjectId, ref: 'Admin' },
  },
  {
    timestamps: true,
  }
)

const PreviewedModel =
  mongoose.models.Previewed || mongoose.model('Previewed', PreviewedSchema)

module.exports = PreviewedModel
