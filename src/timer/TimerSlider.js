import React from 'react'
import Slider from 'react-input-slider'
import styled from 'styled-components/macro'

export default function TimerSlider({ timerSeconds }) {
  return <Slidertyled axis="x" x={timerSeconds} xmax="1800" disabled="true" />
}

const Slidertyled = styled(Slider)`
  margin-top: 1em;
  margin-bottom: 1em;
`
