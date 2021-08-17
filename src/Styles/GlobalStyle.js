import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    width: 100%;
    height: 100%;
    font-size: 62.5%;
  }
  
  body {
    width: 100%;
    min-height: 100%;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
    font-size: 14px;
    line-height: 1.43;
    color: #484848;
    background-color: #fff;
  }
  
  a, a:hover, a:focus {
    color: inherit;
    text-decoration: none;
    /* cursor: pointer; */
  }

  input,textarea {
    outline: none;
    border: 0;
    background-color: transparent;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  ol, ul, li {
    list-style: none;
  }

  img {
    width: 100%;
  }

`

export default GlobalStyle
