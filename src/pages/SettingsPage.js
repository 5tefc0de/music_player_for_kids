import React from 'react'
import styled from 'styled-components/macro'
import Countdown from 'react-countdown-now';

export default function SettingsPage() {
  return (
  <Countdown
  date={Date.now() + 10000}
  intervalDelay={0}
  precision={3}
  renderer={props => <div>{props.total}</div>}
/>

)
}
