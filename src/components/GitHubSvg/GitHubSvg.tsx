import React from 'react';

// Components.
import StyledSvg from '../StyledSvg';

export interface IProps {
  color?: string;
  hoverColor?: string;
  size?: string;
}

export const GitHubSvg: React.FC<IProps> = ({
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
    <path d="M 64,495 V 480 H 47.5 31 V 464 448 H 15.5 0 V 256.5 65 H 15.5 31 V 47.5 30 H 47.5 64 V 15 0 H 254.5 445 v 15 15 h 17 17 V 47.5 65 H 495.5 512 V 256.5 448 H 495.5 479 v 16 16 h -17 -17 v 15 15 H 254.5 64 Z M 304,378 v -56 h -7 -7 v -5 -5 h 26.5 26.5 v -7 -7 h 10 10 v -8 -8 h 9.5 9.5 v -8.5 -8.5 h 5.5 5.5 v -13 -13 h 7 7 V 217.5 196 h -6 -6 V 185.5 175 h -5.5 -5.5 v -10 -10 h -6 -6 V 115.5 76 h -9.5 -9.5 v 6.5 6.5 h -12 -12 v 7.5 7.5 h -8 -8 v 8 8 H 301.5 290 v -5.5 -5.5 h -34 -34 v 5.5 5.5 H 210.5 199 v -8 -8 H 191.5 184 V 96.5 89 H 171.5 159 V 82.5 76 h -9 -9 v 39.5 39.5 h -7 -7 v 10 10 h -5.5 -5.5 v 10.5 10.5 h -5.5 -5.5 v 21.5 21.5 h 7.5 7.5 v 13 13 h 5 5 v 8.5 8.5 h 8 8 v 8 8 h 12 12 v 7 7 h 26 26 v 5 5 h -8 -8 v 10 10 h -12 -12 v 5.5 5.5 h -8 c -7.86667,0 -8,-0.0417 -8,-2.5 0,-2.36364 -0.3,-2.5 -5.5,-2.5 H 155 v -4.5 c 0,-4.47619 -0.0185,-4.5 -3.5,-4.5 H 148 v -5 -5 h -4.5 -4.5 v -6 -6 h -4 -4 v -5 -5 h -10 -10 v 4.5 4.5 h 4.5 4.5 v 7.5 7.5 h 4.5 4.5 v 5.5 c 0,5.44444 0.0303,5.5 3,5.5 h 3 v 9.5 9.5 h 5.5 5.5 v 4.5 4.5 h 10 10 v 3.5 3.5 h 20 20 v 28.5 28.5 h 49 49 z" />
  </StyledSvg>
);

export default GitHubSvg;
