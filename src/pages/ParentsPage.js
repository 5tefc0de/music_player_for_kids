import React from 'react'
import ParentsPlayer from '../common/ParentsPlayer'
import styled from 'styled-components/macro'
import ParentsPlaylist from '../common/ParentsPlaylist'

export default function ParentsPage({
  currentSong,
  setCurrentSong,
  songs,
  playback,
  setPlayback,
  activeIndex,
  isSelected,
  onSongClick
}) {
  return (
    <ParentsPlayerStyled>
      <ParentsPlaylist
        setCurrentSong={setCurrentSong}
        songs={songs}
        onSongClick={onSongClick}
        isSelected={isSelected}
        currentSong={currentSong}
      ></ParentsPlaylist>
   
      <ParentsPlayer
        currentSong={currentSong}
        playback={playback}
        setPlayback={setPlayback}
        activeIndex={activeIndex}
      ></ParentsPlayer>
    </ParentsPlayerStyled>
  )
}

const ParentsPlayerStyled = styled.section`
  display: grid;
  width: 100vw;
  height: 95vh;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: lightgray;
`
