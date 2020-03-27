import styled from 'styled-components';

// Theme.
import palette from '../../theme/palette';

export interface IProps {
  color?: string;
  hoverColor?: string;
  size?: string;
  viewBox: string;
}

export const StyledSvg = styled.svg<IProps>`
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
    fill: ${(props: IProps) => props.color || palette.greyScale.black};
    ${(props: IProps) =>
      props.hoverColor &&
      `
        transition: fill 0.3s ease-in-out;
    `}
  }
`;

export default StyledSvg;
