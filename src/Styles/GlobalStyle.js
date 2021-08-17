import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
  font-family: 'GmarketSansLight';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}


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
    /* font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif; */
    font-family: 'GmarketSansLight';
    font-size: 14px;
    font-weight: 700;
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
