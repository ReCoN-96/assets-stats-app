import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    background-color: #1e1e1e;
    font-size: 1.6rem;
    font-family: 'Saira Condensed', sans-serif;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: inherit;
  }
`;

export default GlobalStyle;
