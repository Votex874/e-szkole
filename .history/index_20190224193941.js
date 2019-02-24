const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/kindergarden/users';
const port =  process.env.PORT || 5000;

// setting up express app
const app = express();

app.use(bodyParse.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));

// connect to mongodb
mongoose
  .connect(mongoURI, { useNewUrlParser: true})
  .then(() => console.log(`MongoDB connected`))
  .catch(err => console.log(`something goes wrong with connecting to db ${err}`))

  
// setting an frontend root
app.use(express.static('build'))   

// initialize routes
app.use('/user', require('./routes/login'))
app.use('/user', require('./routes/register'))
app.use('/api', require('./routes/userRestAPI'))
 
// error handling middleware
app.use( (err, req, res, next) => {
  console.log(err)
  res.status(422).send({ error: err.message })
})

// setting server
app.listen(port, () => console.log(`listening on port ${port}`))