const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user');

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