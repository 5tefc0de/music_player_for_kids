import React, { useState } from 'react'
import styled from 'styled-components/macro'
import songs from '../songs.json'
import Player from './Player'
import Playlist from './Playlist'
import KidsPage from './KidsPage'
import ParentsPage from './ParentsPage'
import Navigation from './Navigation'

export default function App() {
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [activeIndex, setActiveIndex] = useState(0)

  function renderPage() {
    const pages = {
    
      0: <KidsPage />,
      1: <ParentsPage />,
    }
    return pages[activeIndex] 
  }

  return (
    <>
    {renderPage()}
    <AppStyled>
      <HeaderStyled>
        <Player currentSong={currentSong}></Player>
        <Playlist
          setCurrentSong={setCurrentSong}
          songs={[songs[0], songs[1], songs[2], songs[3], songs[4]]}
        ></Playlist>
      </HeaderStyled>
      <Navigation
        buttonTexts={['Kids', 'Parents']}
        onClick={setActiveIndex}
      />
    </AppStyled>

      </>
  )
}

const AppStyled = styled.div`
  display: grid;
  grid: 500px / auto auto auto;
  overflow-y: scroll;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
`

const HeaderStyled = styled.header`
`

