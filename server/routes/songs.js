const router = require('express').Router()
const Song = require('../models/Song')

router.get('/', (req, res) => {
  Song.find()
    .then(songs => res.json(songs))
    .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
  Song.find({ id: req.params.id })
    .then(songs => res.json(songs))
    .catch(err => res.json(err))
})

router.post('/', (req, res) => {
  Song.create(req.body)
    .then(song => res.json(song))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  Song.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(song => res.json(song))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  Song.findByIdAndDelete(req.params.id)
    .then(song => res.json(song))
    .catch(err => res.json(err))
})
/*
router.post('/', async (req, res) => {
  const artist = req.body.artist
  //let previewUrl = artistPreviews[artist]
  //if (!previewUrl) {
    //const artist_query = artist.replace(' ', '+').toLowerCase()
    //previewUrl = await getSongPreview(artist_query)
   // artistPreviews[artist] = previewUrl
  //}
  const artist_query = artist.replace(" ", "+").toLowerCase();
  const previewUrl = await getSongPreview(artist_query);
  const data = {...req.body, previewUrl}
  Song.create(data)
    .then(song => res.json(song))
    .catch(err => res.json(err))
})
*/

module.exports = router
