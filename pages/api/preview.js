import nc from 'next-connect'
import multer from 'multer'
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
import { v2 as cloudinary } from 'cloudinary'
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
const upload = multer({
  storage: multer.memoryStorage(),
})

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).end('Something broke')
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end('Page is not found')
  },
}).post(upload.single('file'), async (req, res) => {
  const uploadedFile = req.file

  console.log(uploadedFile)

  cloudinary.config({
    cloud_name: 'defnvb8vs',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  })

  cloudinary.uploader
    .upload_stream(
      {
        resource_type: 'auto',
      },
      (error, result) => {
        if (error) {
          console.error('Error uploading object:', err)
          return res.status(500).send('Error uploading file')
        }
        const secret = process.env.SECRET
        const { token } = req.cookies
        jwt.verify(token, secret, {}, async (err, info) => {
          if (err) throw err
          const { title, content, name, link, locale, date } = req.body
          try {
            const previewedDoc = new PreviewedModel({
              title,
              name,
              date,
              link,
              locale,
              content,
              cover: result.secure_url,
              author: info.id,
            })
            await previewedDoc.save()
            res.json(previewedDoc)
          } catch (e) {
            console.error(e)
            res.status(450).json(e)
          }
          m
        })
      }
    )
    .end(uploadedFile.buffer)
})

export default handler
