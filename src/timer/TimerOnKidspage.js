import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import Modal from 'react-responsive-modal'
import TimerSlider from '../timer/TimerSlider'
import { WinkSmile } from 'styled-icons/boxicons-solid/WinkSmile'

export default function TimerOnKidspage({
  timerSeconds,
  setTimerSeconds,
  timerIsActive,
  setTimerIsActive,
  openModal,
  setOpenModal
}) {
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
    if (timerIsActive) {  //true, wenn aud PLAY gedrückt wird
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
        <TimerSlider timerSeconds={timerSeconds}></TimerSlider>
        <TimerOutputStyled>{timeOutput}</TimerOutputStyled>
      </TimerStyled>

      {openModal && (
        <>
          <Modal open={openModal} onClose={() => setOpenModal(false)} center>
            <SmileStyled size="300" />
          </Modal>
        </>
      )}
    </>
  )
}

const TimerStyled = styled.div`
  text-align: center;
`
const TimerOutputStyled = styled.div`
  font-size: 1.4em;
`
const SmileStyled = styled(WinkSmile)`
  color: black;
`
