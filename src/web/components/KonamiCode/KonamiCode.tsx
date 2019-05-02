import * as React from 'react';
import { connect } from 'react-redux';
import { ActionCreator, bindActionCreators, Dispatch } from 'redux';

// ActionCreators.
import { openAsteroids } from '../../store/layout/actionCreators';

// Types.
import { OpenAsteroidsAction } from '../../store/layout/types';

export interface Props {
  openAsteroids: ActionCreator<OpenAsteroidsAction>;
}

export interface State {
  position: number;
}

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

export class KonamiCode extends React.PureComponent<Props, State> {
  public state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      position: 0,
    };

    // Bind functions.
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  public componentDidMount(): void {
    window.addEventListener('keyup', this.onKeyUp);
  }

  public componentWillUnmount(): void {
    // Remove the keyup event.
    window.removeEventListener('keyup', this.onKeyUp);
  }

  public onKeyUp(event: WindowEventMap['keyup']): void {
    const { keyCode } = event;
    let position: number = 0;

    if (keyCode === codeSequence[this.state.position]) {
      // Increase code position.
      position = this.state.position + 1;

      if (position >= codeSequence.length) {
        // Open the game.
        this.props.openAsteroids();

        position = 0;
      }

      this.setState({ position });
    }
  }

  public render(): null {
    return null;
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  openAsteroids: bindActionCreators(openAsteroids, dispatch),
});

export default connect(
  null,
  mapDispatchToProps
)(KonamiCode);
