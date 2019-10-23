import React from 'react'
import styled from 'styled-components/macro'

export default function ParentsPlayList({ songs, onSongClick }) {
  return (
    
    <PlaylistonParentsPageStyled>
      {songs.map(song => (
        <PlaylistButtononParentsPage
          key={song._id}
          active={song.selected}
          onClick={() => onSongClick(song)}
        >
          <InputOnParentsPlaylistStyled
            src={song.image}
            alt="no image"
            key={song._id}
            type="image"
          ></InputOnParentsPlaylistStyled>
          {song.title}
        </PlaylistButtononParentsPage>
      ))}
    </PlaylistonParentsPageStyled>
 
  )
}



const PlaylistButtononParentsPage = styled.button`
  display: flex;
  background-color: ${props => (props.active ? '#ff9393' : 'lightgrey')};
  width: 300px;
  height: 55px;
  border-radius: 0.9em;
  font-size: 0.7em;
  cursor: pointer;
  color: black;
  font-style: bold;
  font-family: 'Arial';
  margin-bottom: 0.5em;
  align-items: center;
  justify-content: left;
  box-shadow: 1px 3px lightgray;
  text-decoration: none;
`

const PlaylistonParentsPageStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  height: 85vh;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  overflow: scroll;
`
const InputOnParentsPlaylistStyled = styled.input`
  width: 40px;
  height: 40px;
  background-size: cover;
  margin-right: 2.8em;
`
