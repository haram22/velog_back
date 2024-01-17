import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin-left: 40px;
    margin-right: 40px;
    padding: 0;
    max-width: 100vw;
    max-height: 100vh;
    background-color: ${theme.colors.background};
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

`;

export default GlobalStyle;
