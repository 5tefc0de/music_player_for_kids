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
  background: url(https://res.cloudinary.com/dtlbe2w6j/image/upload/v1571218638/Bildschirmfoto_2019-10-16_um_11.36.43_euoxbj.png)
    no-repeat;
  width: 100vw;
  margin: 0 auto;
`
