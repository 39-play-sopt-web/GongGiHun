import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.bgFrom} 0%,
      ${({ theme }) => theme.colors.bgVia} 50%,
      ${({ theme }) => theme.colors.bgTo} 100%
    );
    background-attachment: fixed;
  }

  button, select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
