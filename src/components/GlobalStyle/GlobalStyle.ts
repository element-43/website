import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';

// Styles.
import palette from '../../styles/palette';

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  @font-face {
    font-family: "VT323";
    font-style: normal;
    font-weight: 400;
    src: url("${require('../../fonts/VT323/VT323-Regular.ttf')}") format("truetype"),
      url("${require('../../fonts/VT323/VT323-Regular.woff')}") format("woff"),
      url("${require('../../fonts/VT323/VT323-Regular.woff2')}") format("woff2");
  }

  body {
    margin: 0;
    min-height: 100vh;
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  a {
    color: ${palette.greyScale.black};
    font-weight: 400;
    margin: 0;
  }

  h1 {
    font-size: 3.2rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.3rem;
  }

  a,
  p {
    font-size: 1rem;
  }

  a {
    color: ${palette.brand.purple500};
    cursor: pointer;
    display: block;
    text-decoration: none;
    transition: all 300ms ease-in-out;

    &:hover {
      color: ${palette.brand.green500};
    }
  }
`;

export default GlobalStyle;
