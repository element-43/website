import * as React from 'react';

// Components.
import StyledSvg from '../StyledSvg';

export interface IProps {
  color?: string;
  hoverColor?: string;
  size?: string;
}

export const TwitterSvg: React.FC<IProps> = ({
  color,
  hoverColor,
  size,
}: IProps) => (
  <StyledSvg
    color={color}
    hoverColor={hoverColor}
    size={size}
    viewBox="0 0 512 510"
  >
    <path d="M 64,495 V 480 H 47.5 31 V 464 448 H 15.5 0 V 256.5 65 H 15.5 31 V 47.5 30 H 47.5 64 V 15 0 H 254.5 445 v 15 15 h 17 17 V 47.5 65 H 495.5 512 V 256.5 448 H 495.5 479 v 16 16 h -17 -17 v 15 15 H 254.5 64 Z M 248,387 v -7 h 14.5 14.5 v -5 -5 h 13 13 v -7.5 -7.5 h 12 12 v -9.5 -9.5 h 7.5 7.5 V 322.5 309 h 8 8 v -14 -14 h 7.5 7.5 v -18 -18 h 4 4 V 227.5 210 h 5 5 v -7 -7 h 7.5 7.5 v -9 -9 h -13 -13 v -5.5 -5.5 h 5.5 5.5 v -6.5 -6.5 h 5 c 4.33333,0 5,-0.26667 5,-2 0,-1.46667 0.66667,-2 2.5,-2 2.11111,0 2.5,-0.46667 2.5,-3 0,-2.53333 -0.38889,-3 -2.5,-3 -1.55556,0 -2.5,-0.56667 -2.5,-1.5 0,-1.24242 -1.88889,-1.5 -11,-1.5 h -11 v 6 6 h -8.5 -8.5 v -10 -10 h -10 -10 v -8.5 -8.5 h -32 -32 v 8.5 8.5 h -11 -11 v 10 10 h -6 -6 v 32.5 32.5 h -5 -5 v -8.5 -8.5 h -16 -16 v -6.5 -6.5 h -4.5 -4.5 v -5.5 -5.5 h -13 -13 v -7.5 -7.5 h -9 -9 V 152 142 H 138.5 128 v 10 10 h -10 -10 v 17.5 17.5 h 10 10 v 10 10 h 8 8 v 7 7 h -15 -15 v 11.5 11.5 h 10 10 v 7 7 h 10 10 v 12 12 h -9 -9 v 11 11 h 7.5 7.5 v 7.5 7.5 h 23.5 23.5 v 6.5 6.5 h -6.5 -6.5 v 7 7 h -11 -11 v 3 3 h -29 -29 v 10.5 10.5 h 10 10 v 5.5 5.5 h 61.5 61.5 z" />
  </StyledSvg>
);

export default TwitterSvg;
