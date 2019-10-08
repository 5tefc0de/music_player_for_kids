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

        <div>{currentSong.title}</div>
        <PlaylistStyled>
          <ButtonStyled onClick={() => setCurrentSong(songs[0])}>
            1
          </ButtonStyled>
          <ButtonStyled onClick={() => setCurrentSong(songs[1])}>
            2
          </ButtonStyled>
          <ButtonStyled onClick={() => setCurrentSong(songs[2])}>
            3
          </ButtonStyled>
          <ButtonStyled onClick={() => setCurrentSong(songs[3])}>
            4
          </ButtonStyled>
          <ButtonStyled onClick={() => setCurrentSong(songs[4])}>
            5
          </ButtonStyled>
        </PlaylistStyled>
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

const ButtonStyled = styled.button`
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background: #0069ed;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
`
const HeaderStyled = styled.header`
  display: block;
`
const PlaylistStyled = styled.div`
  margin-top: 1rem;
`
