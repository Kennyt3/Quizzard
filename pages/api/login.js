import '../../app/lib/db'
const AdminModel = require('./model/Admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body
    const adminDoc = await AdminModel.findOne({ email })
    const passed = bcrypt.compareSync(password, adminDoc.password)
    const secret = process.env.SECRET
    if (passed) {
      const token = jwt.sign(
        { name: adminDoc.name, admin: passed, id: adminDoc._id },
        secret
      )
      setCookie('token', token, { req, res, maxAge: 60 * 60 * 24 })
      res.status(200).json(adminDoc)
    } else {
      res.status(400).json('Invalid Password')
    }
  }
}
