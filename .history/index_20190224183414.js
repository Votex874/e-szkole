const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport')
const port =  process.env.PORT || 5000;
const secret = '1sFRec32csSR34aZ';
const cors = require('cors');
const mongoURI = 'mongodb://localhost/kindergarden';

// setting up express app
const app = express();

// // Passport config
// require('./config/passport')(passport)

// connect to mongodb
mongoose
  .connect(mongoURI, { useNewUrlParser: true})
  .then(() => console.log(`MongoDB connected`))
  .catch(err => console.log(`something goes wrong with connecting to db ${err}`))

  
// setting an frontend root
app.use(express.static('build'))
  
app.use(bodyParse.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// initialize routes

app.use('/', require('./routes/login'))
app.use('/api', require('./routes/userRestAPI'))
 
// error handling middleware
app.use( (err, req, res, next) => {
  console.log(err)
  res.status(422).send({ error: err.message })
})

// setting server
app.listen(process.env.PORT || port, () => console.log(`listening on port ${port}`))