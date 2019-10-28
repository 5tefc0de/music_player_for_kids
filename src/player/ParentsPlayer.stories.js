import React from 'react'
import ParentsPlayer from './ParentsPlayer'
import Sound from 'react-sound'

export default {
  title: 'ParentsPlayer'
}

export const player = () => (
  <ParentsPlayer
    currentSong={[
      {
        url:
          'https://res.cloudinary.com/dtlbe2w6j/video/upload/v1571236771/songs/auf-der-mauer-auf-der-lauer_cnxg5s.mp3',
        title: 'Auf der Mauer auf der Lauer'
      }
    ]}
    playback="PLAYING"
    setPlayback="PLAYING"
  >
    <Sound
      url={
        'https://res.cloudinary.com/dtlbe2w6j/video/upload/v1571236771/songs/auf-der-mauer-auf-der-lauer_cnxg5s.mp3'
      }
      playStatus={'PLAYING'}
      loop
    />
  </ParentsPlayer>
)
