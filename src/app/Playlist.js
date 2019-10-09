import React from 'react'
import styled from 'styled-components/macro'

export default function PlayList({ setCurrentSong, songs }) {
  return (
    <PlaylistStyled>
      {songs.map((song, index) => (
          <>
        <ButtonStyled key={index} onClick={() => setCurrentSong(song)}>
          {index + 1}
        </ButtonStyled>
        <div>
        <PlaylistImage src={song.image} alt={song.title} />
        </div>
        </>
      ))}
      
    </PlaylistStyled>
  )
}


const ButtonStyled = styled.button`
  border: 2px solid black;
  padding: 0.5rem 1rem;
  margin: 0;
  background: #0069ed;
  color: #ffffff;
  cursor: pointer;
`
const PlaylistStyled = styled.div`
  margin-top: 1rem;
`

const PlaylistImage = styled.img`
  margin-left: 0;
  margin-right: auto;
  width: 100px;
  
`