import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  /* 여기에 글로벌 스타일을 작성합니다. */
  body {
    margin-left: 40px;
    margin-right: 40px;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.colors.background};
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  /* 기타 글로벌 스타일 */
`;

export default GlobalStyle;
