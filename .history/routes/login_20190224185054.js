const express = require('express')
const router = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const User = require('../models/user');
router.use(cors())

router.post('/login', (req, res) => {
  const { email, password } = req.body
  User.findOne({
    email: email
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          const payload = {
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(JSON.stringify(token))
        } else {
          res.json({ error: 'User does not exist' })
        }
      } else {
        res.json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.send(`error: ${err}`)
    })
})

module.exports = router;