import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { ArrowLeft } from 'styled-icons/evil/ArrowLeft'
import { ArrowRight } from 'styled-icons/evil/ArrowRight'

import { Redirect, NavLink } from 'react-router-dom'

export default function Navigation() {
  const [toParentspage, setToParentspage] = useState(false)

  function testParentPassword() {
    const password = '1234'
    const passwordFromInput = prompt('Passwords?')
    if (password === passwordFromInput) {
      setToParentspage(true)
    } else {
      setToParentspage(false)
    }
  }

function handleOnClick () {
  setToParentspage(false)
}
console.log(toParentspage)

  return toParentspage ? (
    <NavStyled>
      <KidsButtononNavigationStyled to="/" onClick={handleOnClick}>
        <ArrowLeft size="15" /> Kids Player
      </KidsButtononNavigationStyled>
      <ParentsButtononNavigationStyled>
      Player editieren
      </ParentsButtononNavigationStyled>
     
        <Redirect to="/parentspage" />
  

      <SettingsButtononNavigationStyled to="/settingspage" onClick={handleOnClick}>
        Einstellungen <ArrowRight size="15" />
      </SettingsButtononNavigationStyled>
    </NavStyled>
  ) : (
    <NavStyled>
      <KidsButtononNavigationStyled to="/" >
      
        <ArrowLeft size="15" /> Kids Player
      </KidsButtononNavigationStyled>

      <ParentsButtononNavigationStyled onClick={testParentPassword}>
      Player editieren
      </ParentsButtononNavigationStyled>

      <SettingsButtononNavigationStyled to="/settingspage">
        Einstellungen <ArrowRight size="15" />
      </SettingsButtononNavigationStyled>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-family: 'Arial';
  margin-left: 2em;
  margin-top: 0.3em;
  margin-right: 4.3em;
`
const KidsButtononNavigationStyled = styled(NavLink)`
  background-color: #7edad4;
  border-radius: 0.3em;
  font-size: 0.7em;
  padding-left: 0;
  font-family: 'Arial';
  color: white;
  cursor: pointer;
  font-style: bold;
`
const ParentsButtononNavigationStyled = styled.button`
  background-color: #39968f;
  border-radius: 0.3em;
  font-size: 0.7em;
  padding: 0;
  font-family: 'Arial';
  color: white;
  cursor: pointer;
  font-style: bold;
`

const SettingsButtononNavigationStyled = styled(NavLink)`
  background-color: #7edad4;
  border-radius: 0.3em;
  font-size: 0.7em;
  padding-right: 10px;
  font-family: 'Arial';
  color: white;
  cursor: pointer;
  padding: 0;
  font-style: bold;
  padding-left: 1px;
`
