import React from 'react'
import Sound from 'react-sound'

export default function KidsPlayer({ currentSong, playback }) {
  return (
    <div>
      {playback && <Sound url={currentSong.url} playStatus={playback} loop />}
    </div>
  )
}
