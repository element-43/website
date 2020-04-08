import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';

// Fonts.
import VT323RegularTTF from '../../fonts/VT323/VT323-Regular.ttf';
import VT323RegularWOFF from '../../fonts/VT323/VT323-Regular.woff';
import VT323RegularWOFF2 from '../../fonts/VT323/VT323-Regular.woff2';

// Theme.
import palette from '../../theme/palette';

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  @keyframes roll {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @font-face {
    font-family: "VT323";
    font-style: normal;
    font-weight: 400;
    src: url("${VT323RegularTTF}") format("truetype"),
      url("${VT323RegularWOFF}") format("woff"),
      url("${VT323RegularWOFF2}") format("woff2");
  }

  body {
    margin: 0;
    min-height: 100vh;
    animation-duration: 4s;
    animation-iteration-count: 1;
    animation-name: roll;
  }

  #app {
    display: flex;
    font-size: 100%;
    flex-direction: column;
    min-height: 100%;
  }

  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  span {
    color: ${palette.greyScale.black};
    font-weight: 400;
  }

  a {
    color: ${palette.brand.purple500};
    cursor: pointer;
    font-size: 1.3rem;
    text-decoration: none;
    transition: all 300ms ease-in-out;

    &:hover {
      color: ${palette.brand.green500};
    }
  }
`;

export default GlobalStyle;
