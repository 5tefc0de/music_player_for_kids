import React from 'react'
import Sound from 'react-sound'
import PropTypes from 'prop-types'

KidsPlayer.propTypes = {
  currentSong: PropTypes.array,
  playback: PropTypes.string
}

export default function KidsPlayer({ currentSong, playback, openModal }) {
  return openModal ? (
    <div>
      {playback && <Sound url={currentSong.url} playStatus={'STOPPED'} loop />}
    </div>
  ) : (
    <div>
      {playback && <Sound url={currentSong.url} playStatus={'PLAYING'} loop />}
    </div>
  )
}
