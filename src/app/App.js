import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import KidsPage from '../pages/KidsPage'
import ParentsPage from '../pages/ParentsPage'
import Navigation from '../common/Navigation'
import TimerPage from '../pages/TimerPage'
import { getSongs, patchSong} from '../services'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App() {
  const [songs, setSongs] = useState([])
  const [playback, setPlayback] = useState('STOPPED')
  const [currentSong, setCurrentSong] = useState([])

  const [timerSeconds, setTimerSeconds] = useState(10)
  const [timerIsActive, setTimerIsActive] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    getSongs().then(setSongs)
  }, [])

  function toggleIsSelected(song) {
    patchSong(song._id, { selected: !song.selected }).then(updatedSong => {
      const index = songs.findIndex(song => song._id === updatedSong._id)
      setSongs([
        ...songs.slice(0, index),
        { ...song, selected: updatedSong.selected },
        ...songs.slice(index + 1)
      ])
      setCurrentSong(song)
    })
  }


  return (
    <Router>
      <AppStyled>
        <Navigation
       
          timerSeconds={timerSeconds}
          setTimerSeconds={setTimerSeconds}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <KidsPage
                playback={playback}
                setPlayback={setPlayback}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                songs={songs}
                timerSeconds={timerSeconds}
                timerIsActive={true}
              />
            )}
          />
          <Route
            path="/parentspage"
            render={() => (
              <ParentsPage
                playback={playback}
                setPlayback={setPlayback}
                currentSong={currentSong}
                songs={songs}
                onSongClick={toggleIsSelected}
              />
            )}
          />
          <Route
            path="/timerpage"
            render={() => (
              <TimerPage
                timerSeconds={timerSeconds}
                setTimerSeconds={setTimerSeconds}
                timerIsActive={timerIsActive}
                setTimerIsActive={setTimerIsActive}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            )}
          />
        </Switch>
      </AppStyled>
    </Router>
  )
}

const AppStyled = styled.div`
  display: grid;
  grid-template-rows: min-content auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  @media (min-width: 900px) {
    width: 375px;
    height: 667px;
    border: 30px solid black;
    border-width: 60px 20px;
    border-radius: 20px;
    box-shadow: 30px 40px 30px #2264;
    margin: 40px auto;
  }
`
