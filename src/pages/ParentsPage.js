import React from 'react'
import ParentsPlayer from '../player/ParentsPlayer'
import styled from 'styled-components/macro'
import ParentsPlaylist from '../playlists/ParentsPlaylist'

export default function ParentsPage({
  currentSong,
  songs,
  playback,
  setPlayback,
  onSongClick
}) {
  return (
    <ParentsPageStyled>
      <ParentsPlayer
        currentSong={currentSong}
        playback={playback}
        setPlayback={setPlayback}
      ></ParentsPlayer>

      <ParentsPlaylist
        songs={songs}
        onSongClick={onSongClick}
        currentSong={currentSong}
      ></ParentsPlaylist>
    </ParentsPageStyled>
  )
}

const ParentsPageStyled = styled.section`
  display: grid;
  width: 100vw;
  height: 95vh;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: white;
`
