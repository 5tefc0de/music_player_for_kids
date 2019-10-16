import React, { useState } from 'react'
import styled from 'styled-components/macro'
import songs from '../songs.json'

import KidsPage from '../pages/KidsPage'
import ParentsPage from '../pages/ParentsPage'
import Navigation from '../common/Navigation'

export default function App() {
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [activePage, setActivePage] = useState(0)
  const [playback, setPlayback] = useState('STOPPED')

  function renderPage() {
    const pages = {
      0: (
        <KidsPage
          playback={playback}
          setPlayback={setPlayback}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          songs={[songs[0], songs[1], songs[2], songs[3], songs[4]]}
          activePage={activePage}
        />
      ),
      1: (
        <ParentsPage
          playback={playback}
          setPlayback={setPlayback}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          songs={[songs[0], songs[1], songs[2], songs[3], songs[4]]}
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
