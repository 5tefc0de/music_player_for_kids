import React from 'react'
import styled from 'styled-components/macro'
import { ArrowLeft } from 'styled-icons/evil/ArrowLeft'
import { ArrowRight } from 'styled-icons/evil/ArrowRight'

export default function Navigation({ onClick }) {
  return (
    <NavStyled>
      <KidsButtononNavigationStyled onClick={() => onClick(0)}>
        <ArrowLeft size="15" /> Kids Player
      </KidsButtononNavigationStyled>

      <ParentsButtononNavigationStyled onClick={() => onClick(1)}>
        Player editieren
      </ParentsButtononNavigationStyled>

      <SettingsButtononNavigationStyled onClick={() => onClick(2)}>
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
const KidsButtononNavigationStyled = styled.button`
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
const SettingsButtononNavigationStyled = styled.button`
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
