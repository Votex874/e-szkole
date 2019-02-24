const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// creating a user Schema
const TestSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: [true, 'Rola użytkownika nie została wybrana']
  },
  kinderGarderGroup: {
    type: String,
    required: [true, "Grupa w ktorej znajduje się dziecko jest obowiązkowa"]
  },
  parent: {
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    phone: {
      type: [Number],
      required: true
    },
    secondParent: {
      name: {
        type: String,
        require: false
      },
      surname: {
        type: String,
        require: false
      },
      phone: {
        type: String,
        require: false
      },
      email: {
        type: String,
        require: false
      }
    },
    address: {
      street: {
        type: String,
        required: false
      },
      city: {
        type: String,
        required: false,
      },
      postNumber: {
        type: String,
        required: false,
      }
    },
    children: {
      name: {
        type: String,
        required: true,
      },
      surname: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      }
    }
  }
});

const Test = mongoose.model('test', TestSchema);

module.exports = Test;


