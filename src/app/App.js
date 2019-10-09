import React, { useState } from 'react'
import styled from 'styled-components/macro'
import songs from '../songs.json'
import Player from './Player'
import Playlist from './Playlist'


export default function App() {
  const [currentSong, setCurrentSong] = useState(songs[0])

  return (
    <AppStyled>
      <HeaderStyled>
        <Player currentSong={currentSong}></Player>
        <Playlist
          setCurrentSong={setCurrentSong}
          songs={[songs[0], songs[1], songs[2], songs[3], songs[4]]}
        ></Playlist>
      </HeaderStyled>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
`

const HeaderStyled = styled.header`
  display: block;
`

