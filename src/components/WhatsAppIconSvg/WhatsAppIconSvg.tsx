import React from 'react';

// Components.
import StyledSvg from '../StyledSvg';

export interface IProps {
  color?: string;
  hoverColor?: string;
  size?: string;
}

export const WhatsAppIconSvg: React.FC<IProps> = ({
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
    <path d="M 0,493.5 V 475 H 9.5 19 V 464 453 H 22.5 26 V 443 433 H 30.5 35 V 417.5 402 h 4 4 V 388 374 H 35 27 V 358.5 343 H 22 17 V 319 295 H 11.5 6 V 249 203 H 12.5 19 V 191.5 180 h 4 4 V 168 156 H 32.5 38 V 143.5 131 h 7 7 v -13 -13 h 7 7 v -9 -9 h 8 8 v -7 -7 h 8 8 v -8 -8 h 8 8 V 49.5 42 h 10.5 10.5 v -6 -6 h 13 13 v -6 -6 h 12 12 v -4 -4 h 13 13 V 5 0 H 248.5 286 V 3.5 7 h 19 19 v 3.5 3.5 h 19 19 v 5 5 h 11.5 11.5 v 6 6 h 9 9 v 5.5 5.5 h 11 11 v 6 6 h 8 8 v 8.5 8.5 h 7 7 v 7.5 7.5 h 7 7 v 8.5 8.5 h 6 6 v 8 8 h 5.5 5.5 v 9 9 h 4 4 v 8.5 8.5 h 3 3 v 10.5 10.5 h 3 3 v 9 c 0,7.33333 0.27778,9 1.5,9 1.22807,0 1.5,1.72222 1.5,9.5 0,8.56207 0.18188,9.5 1.84219,9.5 1.69782,0 1.89375,1.42327 2.5,18.16031 0.3618,9.98817 0.65781,23.71317 0.65781,30.5 V 278 h -3.5 -3.5 v 14.5 c 0,9 -0.37931,14.5 -1,14.5 -0.61538,0 -1,5 -1,13 v 13 h -3.5 -3.5 v 8 8 h -4.5 -4.5 v 12 12 h -6 -6 v 10.5 10.5 h -5.5 -5.5 v 9 9 h -7 -7 v 8.5 8.5 h -9 -9 v 7.5 7.5 h -7 -7 v 6.5 6.5 h -8 -8 v 6.5 6.5 h -9 -9 v 5.5 5.5 h -10 -10 v 4 4 H 360.5 349 v 4 4 h -12 -12 v 2.5 c 0,2.42857 -0.2,2.5 -7,2.5 h -7 v 3 3 h -38 -38 v -3 -3 H 217.5 200 V 498.5 495 H 189.5 179 v -3 -3 h -10 -10 v -5.5 -5.5 h -7 c -6.8,0 -7,0.0714 -7,2.5 v 2.5 h -18 -18 v 4 4 H 97 85 v 3.5 3.5 H 74.5 64 v 4 4 H 51 38 v 3 3 H 19 0 Z m 311,-31 V 460 h 11.5 11.5 v -4 -4 h 10 10 v -4 -4 h 9 9 v -5.5 -5.5 h 8 8 v -6.5 -6.5 h 7 7 v -6.5 -6.5 h 9 9 v -7.5 -7.5 h 7 7 v -8.5 -8.5 h 5.5 5.5 v -9 -9 h 6 6 V 346.5 336 h 4.5 4.5 v -12 -12 h 3.5 3.5 v -8 c 0,-4.66667 0.41667,-8 1,-8 0.61538,0 1,-5 1,-13 0,-8 0.38462,-13 1,-13 0.64151,0 1,-9.5 1,-26.5 0,-22.88889 -0.2044,-26.5 -1.5,-26.5 -1.2381,0 -1.5,-1.83333 -1.5,-10.5 V 196 h -3 -3 v -8.5 -8.5 h -3 -3 v -9 -9 h -4 -4 v -8 -8 h -5.5 -5.5 v -8.5 -8.5 h -6 -6 v -7.5 -7.5 h -7 -7 V 104.5 96 h -7 -7 v -6 -6 h -8 -8 V 78.5 73 h -11 -11 v -6 -6 h -9 -9 V 56 51 H 335.5 324 V 47.5 44 H 305 286 V 40.5 37 H 254.5 223 v 5 5 h -12 -12 v 4 4 h -13 -13 v 6 6 H 162.5 152 v 6 6 h -8 -8 v 7.5 7.5 h -8 -8 v 8 8 h -8 -8 v 7 7 h -7 -7 v 9 9 h -7 -7 v 13 13 H 70.5 65 v 12.5 12.5 h -4 -4 v 12 c 0,7.33333 -0.388889,12 -1,12 -0.653333,0 -1,17.33333 -1,50 v 50 h 6.5 6.5 v 15.5 15.5 h 7.5 7.5 v 12 12 h 7.5 7.5 v 18.5 18.5 h -6 -6 v 13 13 h -2.5 c -2.333333,0 -2.5,0.33333 -2.5,5 v 5 h 9 c 8.333333,0 9,-0.14815 9,-2 0,-1.91667 0.666667,-2 16,-2 h 16 v -5 -5 h 19 19 v 5 5 h 6 6 v 5.5 5.5 h 8 8 v 3 3 h 10 c 8.22222,0 10,0.26667 10,1.5 0,1.2381 1.83333,1.5 10.5,1.5 9.83333,0 10.5,0.12698 10.5,2 0,1.96347 0.66667,2 36.5,2 H 311 Z m 7,-89.5 v -4 h -15 -15 v -5 -5 h -11 -11 v -4.5 -4.5 h -12 -12 v -6.5 -6.5 h -11 -11 v -8.5 -8.5 h -9.5 -9.5 v -8 -8 h -8.5 -8.5 v -10 -10 h -7 -7 v -10 -10 h -7 -7 v -9.5 -9.5 h -5.5 -5.5 v -9.5 -9.5 h -4.5 -4.5 v -29 -29 h 4 4 v -12 -12 h 9 9 v -7 -7 h 19 19 v 10 10 h 6.5 6.5 v 9 9 h 5.5 5.5 v 9.5 9.5 h 5 5 v 18.5 18.5 h -9.5 -9.5 v 16 16 h 3.5 3.5 v 9 9 h 8.5 8.5 v 8 8 h 9.5 9.5 v 7 7 h 11 11 v 5.5 5.5 h 11.5 11.5 v -5.5 -5.5 h 7 7 v -8 -8 h 5 5 v -5 -5 h 19 19 v 5 5 h 6.5 6.5 v 8 8 h 8.5 8.5 v 23.5 23.5 h -6 -6 v 5 5 h -8 -8 v 5 5 h -5.5 c -5.44444,0 -5.5,0.0303 -5.5,3 v 3 h -19 -19 z" />
  </StyledSvg>
);

export default WhatsAppIconSvg;
