import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import tracks from '../tracks.json'
import KidsPage from '../pages/KidsPage'
import ParentsPage from '../pages/ParentsPage'
import Navigation from '../common/Navigation'
import { getSongs, postSong, patchSong, deleteSong} from '../services'

export default function App() {
  const [songs, setSongs] = useState([])
  const [currentSong, setCurrentSong] = useState(tracks[0])
  const [activePage, setActivePage] = useState(1)
  const [playback, setPlayback] = useState('STOPPED')
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    getSongs().then(setSongs)
  }, [])

console.log(songs)


  

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
          //onSongClick={toogleIsSelected}
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
