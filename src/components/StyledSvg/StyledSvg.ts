import styled from 'styled-components';

// Theme.
import palette from '../../theme/palette';

export interface Props {
  color?: string;
  hoverColor?: string;
  size?: string;
  viewBox: string;
}

export const StyledSvg = styled.svg<Props>`
  height: ${(props: Props): string | undefined => props.size || '1rem'};

  ${(props: Props): string | undefined =>
    props.hoverColor &&
    `
    &:hover {
      path {
        fill: ${props.hoverColor};
      }
    }
  `}

  path {
    fill: ${(props: Props): string | undefined =>
      props.color || palette.greyScale.black};
    ${(props: Props): string | undefined =>
      props.hoverColor &&
      `
        transition: fill 0.3s ease-in-out;
    `}
  }
`;

export default StyledSvg;
