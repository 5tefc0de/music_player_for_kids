import React from 'react'
import styled from 'styled-components/macro'
import Countdown from 'react-countdown-now';

export default function SettingsPage() {
  
    const Completionist = () => <span>You are good to go!</span>;


    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (!completed) {
          // Render a complete state
          return <span>{hours}:{minutes}:{seconds}</span>;
        } else {
          // Render a countdown
          return <Completionist />;
        }
      };
      
  
    return (
  <Countdown
  date={Date.now() + 10000}
  intervalDelay={0}
  precision={3}
  renderer={renderer}
  autoStart={false}
 
/>

)
}
