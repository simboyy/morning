'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SuburbSchema = new Schema({
  name: String,
  active:false
});

module.exports = mongoose.model('Suburb', SuburbSchema);
