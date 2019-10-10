import React, { useState } from 'react'
import styled from 'styled-components/macro'
import songs from '../songs.json'

import KidsPage from '../pages/KidsPage'
import ParentsPage from '../pages/ParentsPage'
import Navigation from '../common/Navigation'

export default function App() {
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [activeIndex, setActiveIndex] = useState(0)
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
          activeIndex={activeIndex}
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
    return pages[activeIndex]
  }

  return (
    <>
      <AppStyled>
        <MainStyled>{renderPage()}</MainStyled>

        <FooterStyled>
          <Navigation
            buttonTexts={['Kids', 'Parents']}
            onClick={setActiveIndex}
          ></Navigation>
        </FooterStyled>
      </AppStyled>
    </>
  )
}

const AppStyled = styled.div`
  display: grid;
  height: 100vh;
  text-align: center;
  grid-template-rows: auto 30px;
  overflow-y: scroll;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

const MainStyled = styled.div`
  overflow-y: scroll;
`
const FooterStyled = styled.header`
  height: 50px;
  width: 100%;
`
