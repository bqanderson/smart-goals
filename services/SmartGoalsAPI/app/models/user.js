const mongoose = require('mongoose'),
      bcrypt = require('bcrypt');

const Schema = mogoose.Schema({
  user: {
    type: String,
    unique: true,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  clients: [{}]
});
