import React from 'react'
import Player from '../common/Player'
import Playlist from '../common/Playlist'
import styled from 'styled-components/macro'
import { relative } from 'path'


export default function ParentsPage({
  currentSong,
  setCurrentSong,
  songs,
  playback,
  setPlayback,
  activeIndex
}) {
  return (
    <ParentsPlayerStyled>
      
      
  
    
      <Playlist
        setCurrentSong={setCurrentSong}
        songs={[songs[0], songs[1], songs[2], songs[3], songs[4]]}
      ></Playlist>
     

      
      <Player
          currentSong={currentSong}
          playback={playback}
          setPlayback={setPlayback}
          activeIndex={activeIndex}
        ></Player>
       
    </ParentsPlayerStyled>
  )
}


const ParentsPlayerStyled = styled.section`
display: grid;
  width: 100vw;
  height: 95vh;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: lightgray;

  `

 
