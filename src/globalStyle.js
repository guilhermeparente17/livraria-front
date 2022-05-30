import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    list-style: none;
    overflow: hidden;
  }

  body {
    background-color: #1D1261;
  }

  a {
    text-decoration: none;
  }

`;
 
export default GlobalStyle;