import styled from 'styled-components';

// Styles.
import palette from '../../styles/palette';

interface Props {
    color?: string;
    hoverColor?: string;
    size?: string;
    viewBox: string;
}

const StyledSvg = styled<Props, 'svg'>('svg')`
  height: ${props => props.size || '1rem'};
  
  ${props => props.hoverColor && `
    &:hover {
      path {
        fill: ${props.hoverColor};
      }
    }
  `}
  
  path {
    fill: ${props => props.color || palette.greyScale.black};
    ${props => props.hoverColor && `
        transition: fill 0.3s ease-in-out;
    `}
  }
`;

export {
    StyledSvg,
    Props
};
