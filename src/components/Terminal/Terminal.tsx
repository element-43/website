import React, { createRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css, keyframes } from 'styled-components';

// Actions.
import {
  closeAsteroidsAction,
  closeTerminalAction,
  openAsteroidsAction,
  openTerminalAction,
  setBarrelRollingAction,
} from '../../store/layout/actions';
import { push } from '../../store/router/actions';

// Enums.
import { Routes } from '../../enums';

// Hooks.
import { usePrevious } from '../../hooks';

// Theme.
import palette from '../../theme/palette';

// Types.
import { IApplicationState } from '../../store';

const slideUpAnimation = keyframes`
  from {
    top: 0;
  }
  to {
    top: -4.5rem;
  }
`;
const slideDownAnimation = keyframes`
  from {
    top: -4.5rem;
  }
  to {
    top: 0;
  }
`;
const Input = styled.input`
  color: ${palette.greyScale.white};
  background-color: transparent;
  border: none;
  bottom: 0;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  height: 100%;
  left: 0;
  line-height: 2.5rem;
  margin: 0 0 0 1.5rem;
  outline: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;
const Inner = styled.div`
  flex: 1;
  position: relative;
  margin: 0 1rem;

  &:before {
    content: '>';
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
    line-height: 2.5rem;
  }
`;
const Outer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;
const Wrapper = styled.div<{ open: boolean; prevOpen: boolean | undefined }>`
  background-color: ${palette.greyScale.semiTransparentBlack};
  color: ${palette.greyScale.white};
  ${({ open }) => !open && `display: none;`}
  height: 4.5rem;
  left: 0;
  position: fixed;
  right: 0;
  z-index: 1000;
  ${({ open, prevOpen }) => {
    if (prevOpen !== undefined && prevOpen !== open) {
      if (open) {
        return css`
          animation: 200ms forwards ${slideDownAnimation};
          display: block;
          top: -4.5rem;
        `;
      }

      return css`
        animation: 200ms forwards ${slideUpAnimation};
        display: block;
        top: 0;
      `;
    }

    return '';
  }}
`;

export const Terminal: React.FC = () => {
  const inputRef: React.RefObject<HTMLInputElement> = createRef<
    HTMLInputElement
  >();
  const dispatch = useDispatch();
  const asteroidsOpen: boolean = useSelector(
    (state: IApplicationState) => state.layout.asteroids.open
  );
  const terminalOpen: boolean = useSelector(
    (state: IApplicationState) => state.layout.terminal.open
  );
  const prevTerminalOpen: boolean | undefined = usePrevious<
    boolean | undefined
  >(terminalOpen);
  const [value, setValue] = useState<string>('');
  const handleAnimationEnd = () => {
    const inputElement: HTMLInputElement | null = inputRef.current;

    if (inputElement) {
      if (terminalOpen) {
        return inputElement.focus();
      }

      inputElement.blur();
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '`') {
      setValue(e.target.value);
    }
  };
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      switch (value) {
        case '/asteroids':
          dispatch(
            asteroidsOpen ? closeAsteroidsAction() : openAsteroidsAction()
          );
          dispatch(closeTerminalAction());
          break;
        case '/barrel roll':
        case '/roll':
          dispatch(setBarrelRollingAction(true));
          break;
        case '/close':
          dispatch(closeTerminalAction());
          break;
        case Routes.About:
          dispatch(push(Routes.About));
          dispatch(closeTerminalAction());
          break;
        case Routes.Contact:
          dispatch(push(Routes.Contact));
          dispatch(closeTerminalAction());
          break;
        case Routes.Home:
          dispatch(push(Routes.Home));
          dispatch(closeTerminalAction());
          break;
        case Routes.Portfolio:
          dispatch(push(Routes.Portfolio));
          dispatch(closeTerminalAction());
          break;
        default:
          break;
      }

      // Clear the terminal.
      setValue('');
    }
  };
  const handleKeyUp = (e: WindowEventMap['keyup']) => {
    if (e.code === 'Backquote') {
      dispatch(terminalOpen ? closeTerminalAction() : openTerminalAction());
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return function cleanup() {
      window.removeEventListener('keyup', handleKeyUp);
    };
  });

  return (
    <Wrapper
      open={terminalOpen}
      onAnimationEnd={handleAnimationEnd}
      prevOpen={prevTerminalOpen}
    >
      <Outer>
        <Inner>
          <Input
            autoComplete="off"
            onChange={handleChange}
            onKeyDown={handleInputKeyDown}
            ref={inputRef}
            type="text"
            value={value}
          />
        </Inner>
      </Outer>
    </Wrapper>
  );
};

export default Terminal;
