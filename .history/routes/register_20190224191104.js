const express = require('express')
const router = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/user');
router.use(cors())

process.env.SECRET_KEY = 'secret'

router.post('/register', (req, res) => {
  const today = new Date()
  const { name, surname, email, password } = req.body
  const userData = {
    name: name,
    surname: surname,
    email: email,
    password: password,
    created: today
  }
  User.findOne({
    email: email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: `${user.email} registered!` })
            })
            .catch(err => {
              res.send(`error ${err}`)
            })
        })
      } else {
        res.json({ error: `User already exists` })
      }
    })
    .catch(err => {
      res.send(`error ${err}`)
    })
})