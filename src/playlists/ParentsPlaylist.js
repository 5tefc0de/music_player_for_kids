import React from 'react'
import styled from 'styled-components/macro'

export default function ParentsPlayList({
  setCurrentSong,
  songs,
  isSelected,
  onSongClick
}) {
  return (
    <PlaylistonParentsPageStyled>
      {songs.map((song, index) => (
        <PlaylistButtononParentsPage
          key={index}
          active={isSelected}
          onClick={() => onSongClick(song)}
        >
          <input
            onClick={() => setCurrentSong(song)}
            alt={song.title}
            key={index}
            type="image"
          ></input>
        </PlaylistButtononParentsPage>
      ))}
    </PlaylistonParentsPageStyled>
  )
}

const PlaylistButtononParentsPage = styled.button`
  background-color: ${props => (props.active ? 'green' : 'skyblue')};
  border-radius: 0.3em;
  font-size: 1em;
  line-height: 1.2;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  cursor: pointer;
  color: white;
  font-style: bold;
`

const PlaylistonParentsPageStyled = styled.div`
  display: flex;
  width: 90vw;
  height: 85vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 1em;
`
