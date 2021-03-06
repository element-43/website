import React from 'react';

// Components.
import StyledSvg from '../StyledSvg';

export interface IProps {
  color?: string;
  hoverColor?: string;
  size?: string;
}

export const CrossSvg: React.FC<IProps> = (props: IProps) => (
  <StyledSvg
    color={props.color}
    hoverColor={props.hoverColor}
    size={props.size}
    viewBox="0 0 262.5 262.5"
  >
    <path d="M131.2,150H93.8v-37.5h37.5V150z M75,150H37.5v37.5H75V150z M112.5,150H75v37.5h37.5V150z M150,150h-37.5v37.5H150V150z M37.5,187.5H0V225h37.5V187.5z M75,187.5H37.5V225H75V187.5z M112.5,187.5H75V225h37.5V187.5z M37.5,225H0v37.5h37.5V225z M75,225 H37.5v37.5H75V225z M75,75H37.5v37.5H75V75z M112.5,75H75v37.5h37.5V75z M150,75h-37.5v37.5H150V75z M37.5,37.5H0V75h37.5V37.5z M75,37.5H37.5V75H75V37.5z M112.5,37.5H75V75h37.5V37.5z M37.5,0H0v37.5h37.5V0z M75,0H37.5v37.5H75V0z M131.2,150h37.5v-37.5 h-37.5V150z M187.5,112.5H225V75h-37.5V112.5z M150,112.5h37.5V75H150V112.5z M225,75h37.5V37.5H225V75z M187.5,75H225V37.5h-37.5 V75z M150,75h37.5V37.5H150V75z M225,37.5h37.5V0H225V37.5z M187.5,37.5H225V0h-37.5V37.5z M187.5,187.5H225V150h-37.5V187.5z M150,187.5h37.5V150H150V187.5z M225,225h37.5v-37.5H225V225z M187.5,225H225v-37.5h-37.5V225z M225,262.5h37.5V225H225V262.5z M187.5,262.5H225V225h-37.5V262.5z M150,225h37.5v-37.5H150V225z" />
  </StyledSvg>
);

export default CrossSvg;
