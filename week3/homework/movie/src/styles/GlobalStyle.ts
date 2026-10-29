import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";

export const globalStyle = (theme: Theme) => css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    font-family:
      "Pretendard Variable",
      "Pretendard",
      -apple-system,
      BlinkMacSystemFont,
      "Apple SD Gothic Neo",
      sans-serif;
    font-size: ${theme.fontSizes.md};

    color: ${theme.colors.textPrimary};
    background-color: ${theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
    color: inherit;
    background: none;
    border: none;
    cursor: pointer;
  }

  ul,
  ol {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  input {
    font: inherit;
    color: inherit;
  }
`;
