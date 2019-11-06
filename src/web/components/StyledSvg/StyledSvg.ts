import styled from 'styled-components';

// Styles.
import palette from '../../styles/palette';

export interface Props {
  color?: string;
  hoverColor?: string;
  size?: string;
  viewBox: string;
}

export const StyledSvg = styled.svg<Props>`
  height: ${(props) => props.size || '1rem'};

  ${(props) =>
    props.hoverColor &&
    `
    &:hover {
      path {
        fill: ${props.hoverColor};
      }
    }
  `}

  path {
    fill: ${(props: Props) => props.color || palette.greyScale.black};
    ${(props: Props) =>
      props.hoverColor &&
      `
        transition: fill 0.3s ease-in-out;
    `}
  }
`;

export default StyledSvg;
