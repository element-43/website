import React from 'react';

// Components.
import StyledSvg from '../StyledSvg';

export interface IProps {
  color?: string;
  hoverColor?: string;
  size?: string;
}

export const LinkedInIconSvg: React.FC<IProps> = ({
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
    <path d="M 0,292.49301 V 122.98602 l 67.75,0.25699 c 37.2625,0.14135 67.6375,0.59449 67.5,1.00699 -0.1375,0.4125 -0.25,76.575 -0.25,169.25 V 462 H 67.5 0 Z M 166.24711,292.75 166.5,123.5 234.75,123.24306 303,122.98612 V 145.49306 168 H 318.5 334 V 150.5 133 H 401.5 469 V 151.5 170 H 490.5 512 V 315.00719 460.01438 L 446.25,459.75719 380.5,459.5 380.24524,358.25 379.99048,257 H 360.99524 342 V 274.5 292 H 322.5 303 v 85 85 H 234.49711 165.99422 Z M 0,45.5 V 0 H 68.5 137 V 45.5 91 H 68.5 0 Z" />
  </StyledSvg>
);

export default LinkedInIconSvg;
