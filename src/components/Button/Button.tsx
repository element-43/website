import React from 'react';
import styled from 'styled-components';

// Components.
import {
  ButtonHoverStyles,
  ButtonOverlay,
  ButtonStyles,
  Square,
} from './ButtonStyles';

// Utils.
import getRandomString from '../../utils/getRandomString';

const buttonOverlayClassName: string = getRandomString(5);

const StyledButton = styled.button`
  ${ButtonStyles}

  &:hover {
    .${buttonOverlayClassName} {
      ${ButtonHoverStyles}
    }
  }
`;

export const Button: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (
  props: React.HTMLAttributes<HTMLButtonElement>
) => (
  <StyledButton {...props}>
    <ButtonOverlay className={buttonOverlayClassName}>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </ButtonOverlay>
    {props.children}
  </StyledButton>
);

export default Button;
