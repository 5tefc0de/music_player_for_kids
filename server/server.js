const express = require('express')
const cors = require('cors')
const server = express()
const { getSongPreview } = require("./spotify_utils");

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/playtime', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})

server.listen(3333, () => console.log('Server ready on port 3333'))
server.use(express.json())
server.use(cors())
server.set('json spaces', 2)

server.use('/songs', require('./routes/songs'))

getSongPreview().then(res => console.log('TEST',res))
//getArtistId().then(res => console.log("TEST artist id", res));
