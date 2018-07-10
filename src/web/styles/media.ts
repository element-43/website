import { css } from 'styled-components';

export default {
    mobileOnly: (...args: any[]) => css`
    @media (max-width: 1110px) {
      ${css.call(undefined, ...args)};
    }
  `,
};
