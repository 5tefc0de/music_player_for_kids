import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import tracks from '../tracks.json'
import KidsPage from '../pages/KidsPage'
import ParentsPage from '../pages/ParentsPage'
import Navigation from '../common/Navigation'
import SettingsPage from '../pages/SettingsPage'
import { getSongs, postSong, patchSong, deleteSong } from '../services'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App() {
  const [songs, setSongs] = useState([])
  const [currentSong, setCurrentSong] = useState(tracks[0])
  const [playback, setPlayback] = useState('STOPPED')

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
        <Navigation ></Navigation>

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
          <Route path="/settingspage" render={() => <SettingsPage />} />
        </Switch>
      </AppStyled>
    </Router>
  )
}

const AppStyled = styled.div`
  display: grid;
  grid-row-gap: 10px;
  width: 100vw;
  height: 100vh;
  grid-template-rows: 40px auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`
