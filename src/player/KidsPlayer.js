import React from 'react'
import Sound from 'react-sound'
import PropTypes from 'prop-types'

KidsPlayer.propTypes = {
  currentSong: PropTypes.array,
  playback: PropTypes.string,
}

export default function KidsPlayer({ currentSong, playback }) {
  return (
    <div>
      {playback && <Sound url={currentSong.url} playStatus={playback} loop />}
    </div>
  )
}

