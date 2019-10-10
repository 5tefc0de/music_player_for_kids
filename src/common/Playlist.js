import React from 'react'
import styled from 'styled-components/macro'

export default function PlayList({ setCurrentSong, songs }) {
  return (
    <PlaylistStyled>
      {songs.map((song, index) => (
        <button onClick={() => setCurrentSong(song)}>
        <ImageStyled src={song.image} alt={song.title} key={index} >
          
        </ImageStyled>
        </button>

      ))}
      
    </PlaylistStyled>
  )
}


const ImageStyled = styled.img`
  margin: 0;
  padding: 0;
  height: 60px;
  margin-left: 0;
  margin-right: auto;
  width: 60px;
`
const PlaylistStyled = styled.div`
`

