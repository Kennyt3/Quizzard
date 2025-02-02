import '../../app/lib/db'
const AdminModel = require('./model/Admin')
const bcrypt = require('bcryptjs')
var salt = bcrypt.genSaltSync(10)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, password, email } = req.body
    try {
      const adminDoc = new AdminModel({
        name,
        email,
        password: bcrypt.hashSync(password, salt),
      })
      await adminDoc.save()
      res.json(adminDoc)
    } catch (e) {
      res.status(450).json(e)
    }
  }
}
