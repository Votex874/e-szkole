const express = require('express')
const router = express.Router();
const passport = require('passport')

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/'
  }),(req, res, next)
  
})

module.exports = router;