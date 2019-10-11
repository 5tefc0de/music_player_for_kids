import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Sound from 'react-sound'

export default function Player({
  currentSong,
  playback,
  setPlayback,
  activeIndex
}) {
  const [position, setPosition] = useState('0:00')
  const [duration, setDuration] = useState('0:00')

  function handlePlay() {
    setPlayback('PLAYING')
  }
  function handlePause() {
    setPlayback('PAUSE')
  }
  function handleStop() {
    setPlayback('STOPPED')
    setPosition('0:00')
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
  console.log(activeIndex)
  return (
    <PlayerStyled>
      {activeIndex !== 0 && (
        <div>
          {playback === 'STOPPED' && (
            <PlayerButtonStyled onClick={handlePlay}>play</PlayerButtonStyled>
          )}
          {playback === 'PLAYING' && (
            <PlayerButtonStyled onClick={handlePause}>pause</PlayerButtonStyled>
          )}
          {playback === 'PAUSE' && (
            <PlayerButtonStyled onClick={handlePlay}>play</PlayerButtonStyled>
          )}
          <PlayerButtonStyled onClick={handleStop}>stop</PlayerButtonStyled>
          <PlayerButtonStyled>
            {position} / {duration}
          </PlayerButtonStyled>
          <PlayerButtonStyled>{currentSong.title}</PlayerButtonStyled>
        </div>
      )}
      {playback && (
        <Sound
          url={currentSong.url}
          playStatus={playback}
          onPlaying={handlePlaying}
        />
      )}
    </PlayerStyled>
  )
}

const PlayerStyled = styled.div`
  position: absolute;
  top: 250px;
`
const PlayerButtonStyled = styled.button`
  border: 2px solid black;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
`
