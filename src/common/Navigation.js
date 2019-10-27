import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Redirect, NavLink } from 'react-router-dom'

export default function Navigation() {
  const [toParentspage, setToParentspage] = useState(false)

  function testParentsPassword() {
    const password = '1234'
    const passwordFromInput = prompt('Passwords?')
    if (password === passwordFromInput) {
      setToParentspage(true)
    } else {
      setToParentspage(false)
    }
  }

  function handleOnClick() {
    setToParentspage(false)
  }

  return toParentspage ? (
    <NavStyled>
      <KidsButtononNavigationStyled to="/" onClick={handleOnClick} />
      <Redirect to="/parentspage" />
      <ParentsButtononNavigationStyled />
      <TimerButtononNavigationStyled to="/timerpage" onClick={handleOnClick} />
    </NavStyled>
  ) : (
    <NavStyled>
      <KidsButtononNavigationStyled to="/" />
      <ParentsButtononNavigationStyled onClick={testParentsPassword} />
      <TimerButtononNavigationStyled to="/timerpage" />
    </NavStyled>
  )
}

const NavStyled = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.2em;
  margin: 0.3rem;
  height: 48px;
`
const KidsButtononNavigationStyled = styled(NavLink)`
  background: url(https://res.cloudinary.com/dtlbe2w6j/image/upload/v1571992078/child-solid_bhihq6.svg)
    no-repeat center/1.5em #7edad4;
  border-radius: 0.3rem;
`
const ParentsButtononNavigationStyled = styled.button`
  background: url(https://res.cloudinary.com/dtlbe2w6j/image/upload/v1571992835/expeditedssl-brands_slbqcd.svg)
    no-repeat center/1.9em #7edad4;
  border-radius: 0.3rem;
`

const TimerButtononNavigationStyled = styled(NavLink)`
  background: url(https://res.cloudinary.com/dtlbe2w6j/image/upload/v1571992705/cogs-solid_b4a9vp.svg)
    no-repeat center/2.1em #7edad4;
  border-radius: 0.3rem;
`
