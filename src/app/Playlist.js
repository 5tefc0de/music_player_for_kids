import React from 'react'
import styled from 'styled-components/macro'

export default function PlayList({ setCurrentSong, songs }) {
  return (
      <PlaylistStyled>
      {songs.map((song, index) => (
          <ButtonStyled key={index} onClick={() => setCurrentSong(song)}>{index} </ButtonStyled>
      ))}
    </PlaylistStyled>
  )}




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
const PlaylistStyled = styled.div`
  margin-top: 1rem;
`
