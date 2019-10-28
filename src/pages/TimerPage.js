import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import Modal from 'react-responsive-modal'
import TimerSlider from '../timer/TimerSlider'
import { WinkSmile } from 'styled-icons/boxicons-solid/WinkSmile'

export default function TimerPage({
  timerSeconds,
  setTimerSeconds,
  timerIsActive,
  setTimerIsActive,
  openModal,
  setOpenModal
}) {
  function toggle() {
    setTimerIsActive(!timerIsActive)
  }

  function reset() {
    setTimerSeconds(10)
    setTimerIsActive(false)
  }

  function onNull() {
    if (timerSeconds === 0) {
      setOpenModal(true)
      reset()
    }
  }

  useEffect(() => {
    onNull()
  }, [timerSeconds])

  useEffect(() => {
    let interval = null
    if (timerIsActive) {
      interval = setInterval(() => {
        setTimerSeconds(timerSeconds => timerSeconds - 1)
      }, 1000)
    } else if (!timerIsActive && timerSeconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timerIsActive, timerSeconds])

  const secondsMinSec = timerSeconds,
    secMin = Math.floor((secondsMinSec / 60) << 0),
    secSec = Math.floor(secondsMinSec % 60)

  const timeOutput = secMin + ':' + ('0' + secSec).slice(-2)

  return (
    <>
      <TimerStyled>
        <H3styled>Maximale Spielzeit </H3styled>
        <TimerSlider timerSeconds={timerSeconds}></TimerSlider>
        <TimerOutputStyled>{timeOutput}</TimerOutputStyled>
        <TimerBox>
          <TimerButton onClick={toggle}>
            {timerIsActive ? 'Pause' : 'Start'}
          </TimerButton>
          <TimerButton onClick={reset}>Reset</TimerButton>
        </TimerBox>
        <SetTimeButtonsBox>
          <SetTimeButton onClick={() => setTimerSeconds(60)}>
            1 Minute
          </SetTimeButton>
          <SetTimeButton onClick={() => setTimerSeconds(300)}>
            5 Minuten
          </SetTimeButton>
          <SetTimeButton onClick={() => setTimerSeconds(600)}>
            10 Minuten
          </SetTimeButton>
          <SetTimeButton onClick={() => setTimerSeconds(1200)}>
            20 Minuten
          </SetTimeButton>
          <SetTimeButton onClick={() => setTimerSeconds(1800)}>
            30 Minuten
          </SetTimeButton>
        </SetTimeButtonsBox>
      </TimerStyled>
      {openModal && (
        <Modal open={openModal} onClose={() => setOpenModal(false)} center>
          <SmileStyled size="300" />
        </Modal>
      )}
    </>
  )
}

const H3styled = styled.h3`
  font-size: 1.5em;
`

const TimerStyled = styled.div`
  text-align: center;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`
const SetTimeButton = styled.button`
  background-color: #7edad4;
  border-radius: 0.3em;
  font-size: 1em;
  padding: 0.25em 0.5em;
  margin: 0.25em;
  color: black;
`
const SetTimeButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
`
const TimerButton = styled.button`
  background-color: #ff9393;
  border-radius: 0.3em;
  font-size: 1em;
  padding: 0.25em 0.5em;
  margin: 0.25em;
  color: black;
`
const TimerOutputStyled = styled.div`
  font-size: 1.4em;
`
const TimerBox = styled.div`
  margin-top: 1.5em;
`
const SmileStyled = styled(WinkSmile)`
  color: black;
`
