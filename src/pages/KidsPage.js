import React from 'react'
import Player from '../common/Player'
import Playlist from '../common/Playlist'
import styled from 'styled-components/macro'

export default function KidsPage({
  currentSong,
  setCurrentSong,
  songs,
  playback,
  setPlayback,
  activePage
}) {
  return (
    <>
     <Kidsstyle>
        <h1>KidsPage</h1>
        
        <Player
          currentSong={currentSong}
          playback={'PLAYING'}
          setPlayback={setPlayback}
          activePage={activePage}
   
        ></Player>
       
        <Playlist
          setCurrentSong={setCurrentSong}
          songs={[songs[0], songs[1], songs[2], songs[3], songs[4]]}
          activePage={activePage}
        ></Playlist>
     </Kidsstyle>
    </>
  )
}

const Kidsstyle = styled.section`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
  background: url(https://pixabay.com/get/55e4d5414d4fad0bffd89938b977692b083edbe25251774b7c287d/clouds-34027_1280.png) 
   no-repeat;
  width: 100vw;
  margin: 0 auto;
  




 


`
