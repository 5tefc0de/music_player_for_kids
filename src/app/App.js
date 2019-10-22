import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import tracks from '../tracks.json'
import KidsPage from '../pages/KidsPage'
import ParentsPage from '../pages/ParentsPage'
import Navigation from '../common/Navigation'

import { getSongs, postSong, patchSong, deleteSong } from '../services'

export default function App() {
  const [songs, setSongs] = useState([])
  const [currentSong, setCurrentSong] = useState(tracks[0])
  const [activePage, setActivePage] = useState(1)
  const [playback, setPlayback] = useState('STOPPED')

  useEffect(() => {
    getSongs().then(setSongs)
  }, [])

  function toggleIsSelected(song) {
    patchSong(song._id, { selected: !song.selected }).then(updatedSong => {
      const index = songs.findIndex(song => song._id === updatedSong._id)
      setSongs([
        ...songs.slice(0, index),
        { ...song, selected: updatedSong.selected },
        ...songs.slice(index + 1)
      ])
      setCurrentSong(song)
    })
  }

  function renderPage() {
    const pages = {
      0: (
        <KidsPage
          playback={playback}
          setPlayback={setPlayback}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          songs={songs}
          activePage={activePage}
        />
      ),
      1: (
        <ParentsPage
          playback={playback}
          setPlayback={setPlayback}
          currentSong={currentSong}
          songs={songs}
          onSongClick={toggleIsSelected}
        />
      )
    }
    return pages[activePage]
  }

  return (
   
    <AppStyled>
          <NavStyled
        buttonTexts={['Kinder', 'Eltern']}
        onClick={setActivePage}
      ></NavStyled>
      {renderPage()}
    </AppStyled>
  )
}

const NavStyled = styled(Navigation)`
margin-left: 100px;
height: 50px;
  width: 100%;

`

const AppStyled = styled.div`
  display: grid;
  grid-row-gap: 10px;
  width: 100vw;
  height: 100vh;
  grid-template-rows: 40px auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: white;
  margin-left: 3.5em;
  margin-top: 0.5em;
  margin-right: 0.5em;
`
