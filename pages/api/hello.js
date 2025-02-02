const nextConnect = require('next-connect')
const multer = require('multer')
const fs = require('fs')

const uploadMiddleware = multer({ dest: 'uploads/' })

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `There was an error! ${error.message}` })
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` })
  },
})

apiRoute.post('/post', uploadMiddleware.single('file'), async (req, res) => {
  const { originalname, path } = req.file
  const parts = originalname.split('.')
  const ext = parts[parts.length - 1]
  const newPath = path + '.' + ext
  fs.renameSync(path, newPath)
})
export default apiRoute

export const config = {
  api: {
    bodyParser: false,
  },
}
