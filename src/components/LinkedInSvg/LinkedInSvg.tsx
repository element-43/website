import * as React from 'react';

// Components.
import StyledSvg from '../StyledSvg';

export interface IProps {
  color?: string;
  hoverColor?: string;
  size?: string;
}

export const LinkedInSvg: React.FC<IProps> = ({
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
    <path d="M 64,495 V 480 H 47.5 31 V 464 448 H 15.5 0 V 256.5 65 H 15.5 31 V 47.5 30 H 47.5 64 V 15 0 H 254.5 445 v 15 15 h 17 17 V 47.5 65 H 495.5 512 V 256.5 448 H 495.5 479 v 16 16 h -17 -17 v 15 15 H 254.5 64 Z M 191,288 V 197 H 154.5 118 v 91 91 h 36.5 36.5 z m 90,45.5 V 288 h 10.5 10.5 v -9.5 -9.5 h 10 10 V 323.5 378 H 357.5 393 V 300 222 H 381.5 370 V 212 202 H 333.5 297 v 9.5 9.5 h -8 -8 v -12 -12 h -37 -37 v 91 91 h 37 37 z m -89,-178 V 131 h -37 -37 v 24.5 24.5 h 37 37 z" />
  </StyledSvg>
);

export default LinkedInSvg;
