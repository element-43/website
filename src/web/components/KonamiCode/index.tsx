import * as React from 'react';
import { connect } from 'react-redux';
import {
    bindActionCreators,
    Dispatch
} from 'redux';

// ActionCreators.
import { openTerminal } from '../../store/layout/actionsCreators';

// Types.
import { ApplicationState } from '../../store';
import { LayoutState } from '../../store/layout/types';

interface Props {
    layout: LayoutState;
    openTerminal: typeof openTerminal;
}

interface State {
    position: number;
}

const codeSequence = [
    38, // Up
    38, // Up
    40, // Down
    40, // Down
    37, // Left
    39, // Right
    37, // Left
    39, // Right
    66, // B
    65 // A
];

class KonamiCode extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            position: 0,
        };

        // Bind functions.
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keyup', this.onKeyUp);
    }

    componentWillUnmount() {
        // Remove the keyup event.
        window.removeEventListener('keyup', this.onKeyUp);
    }

    activate() {
        // Open the terminal.
        this.props.openTerminal();
    }

    onKeyUp(event: WindowEventMap['keyup']): any {
        const { keyCode } = event;
        let position: number = 0;

        if(keyCode === codeSequence[this.state.position]) {
            // Increase code position.
            position = this.state.position + 1;

            if(position >= codeSequence.length) {
                this.activate();
            }

            this.setState({ position });
        }
    }

    render(): null {
        return null;
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    openTerminal: bindActionCreators(openTerminal, dispatch),
});
const mapStateToProps = (state: ApplicationState) => {
    return {
        layout: state.layout,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(KonamiCode);
export {
    KonamiCode,
    Props,
    State
};
