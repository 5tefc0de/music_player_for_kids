import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Sound from 'react-sound'
import { Play } from 'styled-icons/boxicons-regular/Play'
import { Pause } from 'styled-icons/boxicons-regular/Pause'
import { Stop } from 'styled-icons/boxicons-regular/Stop'
import PropTypes from 'prop-types'

ParentsPlayer.propTypes = {
  currentSong: PropTypes.array,
  playback: PropTypes.string.isRequired,
  setPlaybak: PropTypes.func
}


export default function ParentsPlayer({
  currentSong,
  playback,
  setPlayback,
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

  return (
    <PlayerStyled>
      {playback === 'STOPPED' && (
        <PlayerButtonStyled onClick={handlePlay}>
          <Play size="20" />
        </PlayerButtonStyled>
      )}
      {playback === 'PLAYING' && (
        <PlayerButtonStyled onClick={handlePause}>
          <Pause size="20" />
        </PlayerButtonStyled>
      )}
      {playback === 'PAUSE' && (
        <PlayerButtonStyled onClick={handlePlay}>
          <Play size="20" />
        </PlayerButtonStyled>
      )}
      <PlayerButtonStyled onClick={handleStop}>
        <Stop size="20" />
      </PlayerButtonStyled>
      <PlayerButtonStyled>
        {position} / {duration}
      </PlayerButtonStyled>
      {currentSong.title && <PlayerButtonStyled>{currentSong.title}</PlayerButtonStyled>}
      

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
  justify-content: center;
  padding-bottom: 0.5em;
  padding-top: 0.9em;
`
const PlayerButtonStyled = styled.button`
  background-color: #ff9393;
  border-radius: 0.3em;
  font-size: 0.8em;
  padding: 0.25em 0.5em;
  margin: 0.1em;
  color: black;
  justify-content: center;
`
