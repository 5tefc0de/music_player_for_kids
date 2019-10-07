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
      min = Math.floor((positionMinSec / 1000 / 60) << 0),
      sec = Math.floor("0" + Math.floor((positionMinSec/1000) % 60));

    setPosition(min + ':' + ("0"+sec).slice(-2))
    setDuration(Math.floor(duration / 1000))
  }


  return (
    <AppStyled>
      <HeaderStyled>
        <ButtonStyled onClick={handlePlay}>play</ButtonStyled>
        <ButtonStyled onClick={handlePause}>pause</ButtonStyled>
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
