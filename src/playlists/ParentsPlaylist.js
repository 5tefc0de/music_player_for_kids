import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

ParentsPlayList.propTypes = {
  songs: PropTypes.array,
  onSongClick: PropTypes.func
}
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

const PlaylistonParentsPageStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.3rem;
  flex-direction: row;
  overflow: scroll;
`

const PlaylistButtononParentsPage = styled.button`
  display: flex;
  background-color: ${props => (props.active ? '#ff9393' : 'lightgrey')};
  width: 40em;
  height: 4.5em;
  border-radius: 0.9em;
  font-size: 0.8em;
  color: black;
  font-style: bold;
  margin-bottom: 0.6em;
  align-items: center;
  justify-content: left;
  box-shadow: ${props =>
    props.active ? '2px 2px 2px #ff9393' : '2px 2px 2px lightgrey'};
`
const InputOnParentsPlaylistStyled = styled.input`
  width: 3.5em;
  height: 3.5em;
  background-size: cover;
  margin-right: 2.5em;
`
