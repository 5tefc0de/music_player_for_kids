import React from 'react'
import Player from '../common/Player'
import Playlist from '../common/Playlist'
import styled from 'styled-components/macro'


export default function ParentsPage({
  currentSong,
  setCurrentSong,
  songs,
  playback,
  setPlayback,
  activeIndex
}) {
  return (
    <section>
      <h1>ParentsPage</h1>
      <ParentsPlayerStyled>
      <Player
          currentSong={currentSong}
          playback={playback}
          setPlayback={setPlayback}
          activeIndex={activeIndex}
   
        ></Player>
      </ParentsPlayerStyled>

      <Playlist
        setCurrentSong={setCurrentSong}
        songs={[songs[0], songs[1], songs[2], songs[3], songs[4]]}
      ></Playlist>
    </section>
  )
}
const ParentsPlayerStyled = styled.div`
`
