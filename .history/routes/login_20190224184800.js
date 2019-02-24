const express = require('express')
const router = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const User = require('../models/user');
router.use(cors())

router.post('/login', (req, res)=>{
  const { email, password } = req.body
  findOne({
    email
  })
    .then(user => {
      if (user) {
        if (blur.crypt)
      }
    })
})

module.exports = router;