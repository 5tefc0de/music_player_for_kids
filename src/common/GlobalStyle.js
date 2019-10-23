import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  html {
  background: white; /* if body has different background-color */
}
  
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #eee;
    font-family: sans-serif;
    font-size: 18px;
    overflow: hidden;
  
    @media (min-width: 900px) {
    width: 375px;
    height: 667px;
    border: 30px solid black;
    border-width: 60px 20px;
    border-radius: 20px;
    box-shadow: 30px 40px 30px #2264;
    margin: 40px auto;
  }
  
  }

  input, button, textarea {
    font-size: 1em;
  }
`
