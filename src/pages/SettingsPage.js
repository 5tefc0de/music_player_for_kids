import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import Modal from 'react-responsive-modal'

export default function Timer() {
  const [seconds, setSeconds] = useState(10)
  const [isActive, setIsActive] = useState(false)
  const [open, setOpen] = useState(false)

  function toggle() {
    setIsActive(!isActive)
  }

  function reset() {
    setSeconds(10)
    setIsActive(false)
  }

  function onNull() {
    if (seconds === 0) {
      setOpen(true)
      reset()
    }
  }

  useEffect(() => {
    onNull()
  }, [seconds])

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1)
      }, 1000)
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, seconds])


  const secondsMinSec = seconds,
    secMin = Math.floor((secondsMinSec / 60) << 0),
    secSec = Math.floor(secondsMinSec % 60)

  const timeOutput = secMin + ':' + ('0' + secSec).slice(-2)
  

  
  return (
    <>


      <TimerStyled>
      <SetTimeButton onClick={() => setSeconds(60)}>1 Minute</SetTimeButton>
      <SetTimeButton onClick={() => setSeconds(300)}>5 Minuten</SetTimeButton>
      <SetTimeButton onClick={() => setSeconds(600)}>10 Minuten</SetTimeButton>
      <SetTimeButton onClick={() => setSeconds(1200)}>20 Minuten</SetTimeButton>
      <SetTimeButton onClick={() => setSeconds(1800)}>30 Minuten</SetTimeButton>
        <div>{timeOutput}</div>
        <div>
          <button onClick={toggle}>{isActive ? 'Pause' : 'Start'}</button>
          <button onClick={reset}>Reset</button>
        </div>
      </TimerStyled>
      {open && (
        <Modal open={open} onClose={() => setOpen(false)} center>
          <h2>Simple centered modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
      )}
    </>
  )
}

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
  background-color: #39968f;
  border-radius: 0.3em;
  font-size: 1em;
  padding: 0.25em 0.5em;
  margin: 0.25em;
  color: white;
`