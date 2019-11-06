import { css } from 'styled-components';

type Accumulator = Record<SizeKey, (literals: TemplateStringsArray) => string>;
type SizeKey = 'desktop' | 'mobile' | 'tablet';

export const sizes: Record<SizeKey, number> = {
  desktop: 1280,
  mobile: 400,
  tablet: 960,
};

const media: Accumulator = Object.keys(sizes).reduce(
  (accumulator: Accumulator, label: string) => {
    accumulator[label] = (literals: TemplateStringsArray) =>
      css`
        @media (max-width: ${sizes[label]}px) {
          ${css(literals)};
        }
      `.join('');

    return accumulator;
  },
  {} as Accumulator
);

export default media;
