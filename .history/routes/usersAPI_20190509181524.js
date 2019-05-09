const express = require('express')
const router = express.Router();
const User = require('../models/users')

router.get('/users', (req, res, next) => {
  User.find({})
    .then(users => res.send(users))
})

router.post('/users', (req, res, next) => {
  //saving a new user to db and taking a while, if its done it sending us back a response with user data
  User.create(req.body)
    .then(user => {
      res.send(user)
    })
    .catch(next)
})

router.put('/users/:id', (req, res, next) => {
  // Szukamy usera z naszym id w roucie zeby zmienić mu parametry
  User.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      // szukamy danego usera zeby zobaczyc czy rzeczywiscie dostal update
      User.findOne({ _id: req.params.id })
        .then(user => res.send(user))
    })
})

router.delete('/users/:id', (req, res, next) => {
  User.findOneAndRemove({ _id: req.params.id })
    .then(user => res.send(user))
})

module.exports = router