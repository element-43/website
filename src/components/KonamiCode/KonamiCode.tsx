import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// Actions.
import { openAsteroidsAction } from '../../store/layout/actions';

const codeSequence: number[] = [
  38, // Up
  38, // Up
  40, // Down
  40, // Down
  37, // Left
  39, // Right
  37, // Left
  39, // Right
  66, // B
  65, // A
];

export const KonamiCode: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [position, setPosition] = useState<number>(0);
  const handleKeyUp = (event: WindowEventMap['keyup']) => {
    const { keyCode } = event;
    let newPosition: number = 0;

    if (keyCode === codeSequence[position]) {
      // Increase code position.
      newPosition = position + 1;

      if (newPosition >= codeSequence.length) {
        // Open the game.
        dispatch(openAsteroidsAction());

        // Reset code.
        newPosition = 0;
      }
    }

    setPosition(newPosition);
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return function cleanup() {
      window.removeEventListener('keyup', handleKeyUp);
    };
  });

  return null;
};

export default KonamiCode;
