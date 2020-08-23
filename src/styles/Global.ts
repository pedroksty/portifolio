import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #d0e, #91f);

    font-family: Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;
