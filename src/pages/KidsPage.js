import React from 'react'
import Player from '../common/Player'
import Playlist from '../common/Playlist'
import styled from 'styled-components/macro'

export default function KidsPage({
  currentSong,
  setCurrentSong,
  songs,
  playback,
  setPlayback,
  activeIndex
}) {
  return (
    <>
      <Kidsstyle>
        <h1>KidsPage</h1>
        
        <Player
          currentSong={currentSong}
          playback={'PLAYING'}
          setPlayback={setPlayback}
          activeIndex={activeIndex}
   
        ></Player>
       
        <Playlist
          setCurrentSong={setCurrentSong}
          songs={[songs[0], songs[1], songs[2], songs[3], songs[4]]}
        ></Playlist>
      </Kidsstyle>
    </>
  )
}

const Kidsstyle = styled.section`
  background-color: deeppink;
`
