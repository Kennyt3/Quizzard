import nc from 'next-connect'
const mongoose = require('mongoose')
const PreviewedModel = require('./model/Previewed')
export const config = {
  api: {
    bodyParser: false,
  },
}

mongoose
  .connect(`${process.env.MONGODB_SECURE}/?retryWrites=true&w=majority`)
  .then(() => console.log('Connected Successfully'))

  .catch((err) => {
    console.log(err)
  })

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).end('Something broke')
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end('Page is not found')
  },
}).get(async (req, res) => {
  const previewedDoc = PreviewedModel.find().sort({ createdAt: -1 }).exec()
  console.log(previewedDoc)
  previewedDoc.then((previewed) => {
    console.log('Fetched posts:', previewed)
    res.status(201).json({ body: previewed })
  })
})

export default handler
