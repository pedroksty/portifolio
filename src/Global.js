import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');
@import url('https://fonts.googleapis.com/css?family=Concert+One&display=swap');
  html, body {
    margin: 0;
    padding: 0;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility;
  }
  `