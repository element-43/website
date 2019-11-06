import * as React from 'react';
import { connect } from 'react-redux';
import { ActionCreator, bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';
import { animate } from 'velocity-animate';

// ActionCreators.
import {
  closeAsteroids,
  closeTerminal,
  openAsteroids,
} from '../../store/layout/actionCreators';
import { push } from '../../store/router/actionCreators';

// Enums.
import { RoutesEnum } from '../../../common/enums';

// Styles.
import palette from '../../styles/palette';

// Types.
import { ApplicationState } from '../../store';
import {
  CloseAsteroidsAction,
  CloseTerminalAction,
  OpenAsteroidsAction,
} from '../../store/layout/types';
import { PushAction } from '../../store/router/types';

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
  margin-left: 1.5rem;
  outline: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;
const InputContainer = styled.div`
  height: 100%;
  position: relative;
  width: 100%;

  &:before {
    content: '>';
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
    line-height: 2.5rem;
  }
`;
const Wrapper = styled.div`
  background-color: ${palette.greyScale.black};
  bottom: -4.5rem;
  color: ${palette.greyScale.white};
  height: 2.5rem;
  left: 0;
  padding: 1rem;
  position: fixed;
  right: 0;
  z-index: 1000;
`;

export interface Props {
  closeAsteroids: ActionCreator<CloseAsteroidsAction>;
  closeTerminal: ActionCreator<CloseTerminalAction>;
  isOpen: boolean;
  openAsteroids: ActionCreator<OpenAsteroidsAction>;
  push: ActionCreator<PushAction>;
}

export interface State {
  value: string;
}

export class Terminal extends React.PureComponent<Props, State> {
  private readonly inputRef: React.RefObject<HTMLInputElement>;
  private readonly terminalRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);

    this.inputRef = React.createRef();
    this.state = {
      value: '',
    };
    this.terminalRef = React.createRef();

    // Bind functions.
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  public componentDidUpdate(): void {
    const { isOpen } = this.props;
    const inputElement: HTMLInputElement | null = this.inputRef.current;
    const terminalElement: HTMLDivElement | null = this.terminalRef.current;
    let bottom: number;

    if (terminalElement && inputElement) {
      bottom = isOpen ? 0 : -4.5;

      // Animate the terminal.
      animate(
        terminalElement,
        { bottom: `${bottom}rem` },
        { duration: 200, queue: false }
      ).then(() => (isOpen ? inputElement.focus() : inputElement.blur()));
    }
  }

  private onChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ value: event.target.value });
  }

  private onKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.keyCode === 13) {
      switch (this.state.value) {
        case '/asteroids':
          this.props.openAsteroids();
          this.props.closeTerminal();

          break;
        case '/exit':
          this.props.closeTerminal();

          break;
        case RoutesEnum.About:
          this.props.push(RoutesEnum.About);

          break;
        case RoutesEnum.Contact:
          this.props.push(RoutesEnum.Contact);

          break;
        case RoutesEnum.Home:
          this.props.push('/');

          break;
        case RoutesEnum.Portfolio:
          this.props.push(RoutesEnum.Portfolio);

          break;
        default:
          break;
      }

      // Reset the terminal.
      this.setState({ value: '' });
    }
  }

  public render(): React.ReactElement<Terminal> {
    return (
      <Wrapper ref={this.terminalRef}>
        <InputContainer>
          <Input
            autoComplete="off"
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            ref={this.inputRef}
            type="text"
            value={this.state.value}
          />
        </InputContainer>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closeAsteroids: bindActionCreators(closeAsteroids, dispatch),
  closeTerminal: bindActionCreators(closeTerminal, dispatch),
  openAsteroids: bindActionCreators(openAsteroids, dispatch),
  push: bindActionCreators(push, dispatch),
});
const mapStateToProps = (state: ApplicationState) => {
  return {
    isOpen: state.layout.terminal.open,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Terminal);
