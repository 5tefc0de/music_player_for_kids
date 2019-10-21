const mongoose = require('mongoose')

const Song = mongoose.model('Song', {
  id: String,
  url: String,
  title: String,
  image: String,
  selected: Boolean,
})

module.exports = Song


