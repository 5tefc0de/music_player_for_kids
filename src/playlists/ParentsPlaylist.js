import React from 'react'
import styled from 'styled-components/macro'

export default function ParentsPlayList({
  setCurrentSong,
  songs,
  
  onSongClick
  
}) 



{
  return (
    <PlaylistonParentsPageStyled>
      {songs.map((song) => (
        <PlaylistButtononParentsPage
          key={song._id}
          active={song.selected}
          onClick={() => onSongClick(song)}
        >
          <InputOnParentsPlaylistStyled
            onClick={() => setCurrentSong(song)}
            alt={song.id}
            key={song._id}
            type="image"
            src={song.image}
          >
            
          </InputOnParentsPlaylistStyled>
        </PlaylistButtononParentsPage>
      ))}
    </PlaylistonParentsPageStyled>
  )
}

const PlaylistButtononParentsPage = styled.button`
  background-color: ${props => (props.active ? '#eba487' : 'skyblue')};
  width: 75px;
height: 75px;
  border-radius: 0.5em;
  font-size: 1em;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  cursor: pointer;
  color: white;
  font-style: bold;

`

const PlaylistonParentsPageStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  height: 85vh;
  flex-direction: row;
  margin-top: 1em;
  justify-content: space-between;
`
const InputOnParentsPlaylistStyled = styled.input`
width: 50px;
height: 50px;
`