import React from 'react'
import styled from 'styled-components/macro'

export default function Navigation({ buttonTexts, onClick }) {
  return (
    <NavStyled>
      {buttonTexts.map((text, index) => (
        <ButtononNavigationStyled onClick={() => onClick(index)} key={index}>
          {text}
        </ButtononNavigationStyled>
      ))}
    </NavStyled>
  )
}

const NavStyled = styled.nav`
  height: 30px;
`
const ButtononNavigationStyled = styled.button`
  background-color: #eba487;
  border-radius: 0.3em;
  font-size: 1rem;
  line-height: 1.2;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  cursor: pointer;
  color: white;
  font-style: bold;
`
