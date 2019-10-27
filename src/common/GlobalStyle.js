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
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    overflow: hidden;
  

  
  }

  input, button, textarea {
    font-size: 1em;
  }
`
