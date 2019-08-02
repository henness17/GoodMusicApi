var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Song = new Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Song', Song);