import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Sound from 'react-sound'

function App() {
  const [playback, setPlayback] = useState('STOPPED')
  const [position, setPosition] = useState(0)
  const [duration, setDuration] = useState(0)

  function handlePlay() {
    setPlayback('PLAYING')
  }
  function handlePause() {
    setPlayback('PAUSE')
  }
  function handleStop() {
    setPlayback('STOPPED')
  }

  function handlePlaying({ position, duration }) {
    const positionMinSec = position,
      pmin = Math.floor((positionMinSec / 1000 / 60) << 0),
      psec = Math.floor((positionMinSec / 1000) % 60)

    setPosition(pmin + ':' + ('0' + psec).slice(-2))

    const durationMinSec = duration,
      dmin = Math.floor((durationMinSec / 1000 / 60) << 0),
      dsec = Math.floor((durationMinSec / 1000) % 60)

    setDuration(dmin + ':' + ('0' + dsec).slice(-2))
  }

  return (
    <AppStyled>
      <HeaderStyled>
      {playback === 'STOPPED' && (
          <ButtonStyled onClick={handlePlay}>play</ButtonStyled>
        )}
        {playback === 'PLAYING' && (
          <ButtonStyled onClick={handlePause}>pause</ButtonStyled>
          
        )}
        {playback === 'PAUSE' && (
          <ButtonStyled onClick={handlePlay}>play</ButtonStyled>
        )}

        <ButtonStyled onClick={handleStop}>stop</ButtonStyled>
        <ButtonStyled>
          {position} / {duration}
        </ButtonStyled>

        {playback && (
          <Sound
            url="https://archive.org/download/samples2003-11-21.flac16/samples2003-11-21d2t04.mp3"
            playStatus={playback}
            onPlaying={handlePlaying}
          />
        )}
      </HeaderStyled>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
`

const ButtonStyled = styled.div`
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background: #0069ed;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
`
const HeaderStyled = styled.header`
  display: block;
`

export default App
