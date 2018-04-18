const mongoose = require('mongoose'),
      UserModel = require('@SmartGoalsModels/user');

const models = {
  User: mongoose.model('User')
}

module.exports = models;
