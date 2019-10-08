import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Sound from 'react-sound'

export default function Player({ currentSong }) {
  const [playback, setPlayback] = useState('STOPPED')
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
    <Playerstyled>
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
          url={ currentSong.url }
          playStatus={playback}
          onPlaying={handlePlaying}
        />
      )}
    </Playerstyled>
  )
}

const Playerstyled = styled.div``

const ButtonStyled = styled.button`
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
