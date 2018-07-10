import * as React from 'react';

// Components.
import { StyledSvg } from '../StyledSvg';

interface Props {
    color?: string;
    hoverColor?: string;
    size?: string;
}

const MenuSvg: React.SFC<Props> = (props: Props) => (
    <StyledSvg
        color={props.color}
        hoverColor={props.hoverColor}
        size={props.size}
        viewBox="0 0 490.2 490.2">
        <path
            d="M128.4,106.5c0,12.1-9.8,21.9-21.9,21.9H21.9C9.8,128.4,0,118.6,0,106.5V21.9C0,9.8,9.8,0,21.9,0h84.6 c12.1,0,21.9,9.8,21.9,21.9L128.4,106.5L128.4,106.5z M309.3,21.9c0-12.1-9.8-21.9-21.9-21.9h-84.6c-12.1,0-21.9,9.8-21.9,21.9 v84.6c0,12.1,9.8,21.9,21.9,21.9h84.6c12.1,0,21.9-9.8,21.9-21.9V21.9z M490.2,21.9c0-12.1-9.8-21.9-21.9-21.9h-84.6 c-12.1,0-21.9,9.8-21.9,21.9v84.6c0,12.1,9.8,21.9,21.9,21.9h84.6c12.1,0,21.9-9.8,21.9-21.9V21.9z M309.3,202.8 c0-12.1-9.8-21.9-21.9-21.9h-84.6c-12.1,0-21.9,9.8-21.9,21.9v84.6c0,12.1,9.8,21.9,21.9,21.9h84.6c12.1,0,21.9-9.8,21.9-21.9 V202.8z M490.2,202.8c0-12.1-9.8-21.9-21.9-21.9h-84.6c-12.1,0-21.9,9.8-21.9,21.9v84.6c0,12.1,9.8,21.9,21.9,21.9h84.6 c12.1,0,21.9-9.8,21.9-21.9V202.8z M128.4,202.8c0-12.1-9.8-21.9-21.9-21.9H21.9C9.8,180.9,0,190.7,0,202.8v84.6 c0,12.1,9.8,21.9,21.9,21.9h84.6c12.1,0,21.9-9.8,21.9-21.9L128.4,202.8L128.4,202.8z M287.4,361.8h-84.6 c-12.1,0-21.9,9.8-21.9,21.9v84.6c0,12.1,9.8,21.9,21.9,21.9h84.6c12.1,0,21.9-9.8,21.9-21.9v-84.6 C309.3,371.6,299.5,361.8,287.4,361.8z M383.7,490.2h84.6c12.1,0,21.9-9.8,21.9-21.9v-84.6c0-12.1-9.8-21.9-21.9-21.9h-84.6 c-12.1,0-21.9,9.8-21.9,21.9v84.6C361.8,480.4,371.6,490.2,383.7,490.2z M106.5,361.8H21.9C9.8,361.8,0,371.6,0,383.7v84.6 c0,12.1,9.8,21.9,21.9,21.9h84.6c12.1,0,21.9-9.8,21.9-21.9v-84.6C128.4,371.6,118.6,361.8,106.5,361.8z" />
    </StyledSvg>
);

export {
    MenuSvg,
    Props
};
