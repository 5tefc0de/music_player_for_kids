import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

export default function Timer () {
  const [seconds, setSeconds] = useState(3)
  const [isActive, setIsActive] = useState(false)

  function toggle() {
    setIsActive(!isActive)
    
  }

  function reset() {
    setSeconds(3)
    setIsActive(false)
    
  }

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1)
      }, 1000)
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval)
    }
    console.log(interval)
    return () => clearInterval(interval)
  }, [isActive, seconds])



 

/*
  setInterval(() => {
    elem.value+=1;
    if (elem.value === 100) {
      elem.value = 0;
    }
  }, 20);

*/

  return (
    <TimerStyled>
      <div >{seconds}s</div>
      <div >
        <button onClick={toggle}
        >{isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={reset}>
          Reset
        </button>
        <div>
        <progress id="interval" max="100" value="0">70% </progress>
        </div>
      </div>
    </TimerStyled>
  )
}


const TimerStyled = styled.div `
    text-align: center;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  `