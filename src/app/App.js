import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import tracks from '../tracks.json'
import KidsPage from '../pages/KidsPage'
import ParentsPage from '../pages/ParentsPage'
import Navigation from '../common/Navigation'

export default function App() {
  const [songs, setSongs] = useState(tracks)
  const [currentSong, setCurrentSong] = useState(tracks[0])
  const [activePage, setActivePage] = useState(1)
  const [playback, setPlayback] = useState('STOPPED')
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    setSongs(tracks)
  }, [])

  console.log(songs)

  function toogleIsSelected(song) {
    setSongs([
      ...songs.slice(0, song.id),
      { ...song, isSelected: !song.isSelected },
      ...songs.slice(song.id + 1)
    ])
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
          setCurrentSong={setCurrentSong}
          songs={songs}
          isSelected={isSelected}
          onSongClick={toogleIsSelected}
        />
      )
    }
    return pages[activePage]
  }

  return (
    <AppStyled>
      <Navigation
        buttonTexts={['Kids', 'Parents']}
        onClick={setActivePage}
      ></Navigation>
      {renderPage()}
    </AppStyled>
  )
}

const AppStyled = styled.div`
  display: grid;
  grid-template-rows: 40px auto;
  width: 100vw;
  overflow: scroll;
  height: 100vh;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: lightgray;
`
