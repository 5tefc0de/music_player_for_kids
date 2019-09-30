import React from 'react';
import styled from 'styled-components/macro'



function App() {
  return (
    <AppStyled>
      <h1>Hello World</h1>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
`


export default App;
