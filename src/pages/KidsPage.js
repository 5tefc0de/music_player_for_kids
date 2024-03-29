import React from 'react'
import KidsPlayer from '../player/KidsPlayer'
import styled from 'styled-components/macro'
import KidsPlayList from '../playlists/KidsPlaylist'
import TimerOnKidspage from '../timer/TimerOnKidspage'

export default function KidsPage({
  currentSong,
  setCurrentSong,
  songs,
  setPlayback,
  activePage,
  setImageInPlaylist,
  timerSeconds,
  timerIsActive,
  setTimerSeconds,
  setTimerIsActive,
  openModal,
  setOpenModal,
  playback
}) {
  return (
    <>
      <Kidsstyle>
        <KidsPlayer
          currentSong={currentSong}
          playback={'STOPPED'}
          activePage={activePage}
          openModal={openModal}
        ></KidsPlayer>

        <KidsPlayList
          setImageInPlaylist={setImageInPlaylist}
          setCurrentSong={setCurrentSong}
          songs={songs}
          activePage={activePage}
        ></KidsPlayList>

        <TimerOnKidspage
          timerSeconds={timerSeconds}
          setTimerSeconds={setTimerSeconds}
          timerIsActive={timerIsActive}
          setTimerIsActive={setTimerIsActive}
          openModal={openModal}
          setOpenModal={setOpenModal}
          playback={playback}
          currentSong={currentSong}
          setPlayback={setPlayback}
        ></TimerOnKidspage>
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
  width: 100%;
  margin: 0 auto;
`
