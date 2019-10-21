import React from 'react'
import ParentsPlayer from '../player/ParentsPlayer'
import styled from 'styled-components/macro'
import ParentsPlaylist from '../playlists/ParentsPlaylist'

export default function ParentsPage({
  currentSong,
  setCurrentSong,
  songs,
  playback,
  setPlayback,
  activeIndex,
  onSongClick
}) 

{
  return (
    <ParentsPlayerStyled>
      <ParentsPlayer
        currentSong={currentSong}
        playback={playback}
        setPlayback={setPlayback}
        activeIndex={activeIndex}
      ></ParentsPlayer>

      <ParentsPlaylist
        setCurrentSong={setCurrentSong}
        songs={songs}
        onSongClick={onSongClick}
        currentSong={currentSong}
      >
        
      </ParentsPlaylist>


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
