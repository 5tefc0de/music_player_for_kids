import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Sound from 'react-sound'

export default function ParentsPlayer({ currentSong, playback, setPlayback }) {
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

  return (
    <PlayerStyled>
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
      <PlayerButtonStyled>{currentSong.id}</PlayerButtonStyled>

      {playback && (
        <Sound
          url={currentSong.url}
          playStatus={playback}
          onPlaying={handlePlaying}
          loop
        />
      )}
    </PlayerStyled>
  )
}

const PlayerStyled = styled.div`
  display: flex;
  width: 100%;
  height: 44px;
  justify-content: flex-end;
  align-items: flex-start;
`
const PlayerButtonStyled = styled.button`
  background-color: skyblue;
  border-radius: 0.3em;
  font-size: 1rem;
  line-height: 1.2;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  cursor: pointer;
  color: white;
  font-style: bold;
`
