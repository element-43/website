import * as React from 'react';
import {
    RouteComponentProps,
    withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import {
    bindActionCreators,
    Dispatch
} from 'redux';
import styled from 'styled-components';
import { animate } from 'velocity-animate';

// Config.
import { routes } from '../../../common/defaults';

// ActionCreators.
import {
    closeAsteroids,
    closeTerminal,
    openAsteroids
} from '../../store/layout/actionsCreators';

// Styles.
import palette from '../../styles/palette';

// Types.
import { ApplicationState } from '../../store';
import { LayoutState } from '../../store/layout/types';

interface Props extends RouteComponentProps<{}> {
    closeAsteroids: typeof closeAsteroids;
    closeTerminal: typeof closeTerminal;
    layout: LayoutState;
    openAsteroids: typeof openAsteroids;
}

interface State {
    value: string;
}

const Input = styled.input`
  color: ${palette.greyScale.white};
  background-color: transparent;
  border: none;
  bottom: 0;
  font-family: "Courier New", Courier, monospace;
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
    content: ">";
    font-family: "Courier New", Courier, monospace;
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

class Terminal extends React.PureComponent<Props, State> {
    private readonly inputRef: React.RefObject<HTMLInputElement>;
    private readonly terminalRef: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);

        this.inputRef = React.createRef();
        this.state = {
            value: ''
        };
        this.terminalRef = React.createRef();

        // Bind functions.
        this.onChange = this.onChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    componentDidUpdate(): void {
        const { layout } = this.props;
        const inputElement: HTMLInputElement | null = this.inputRef.current;
        const terminalElement: HTMLDivElement | null = this.terminalRef.current;
        let bottom: number;

        if(terminalElement && inputElement) {
            bottom = (layout.terminal.isOpen ? 0 : -4.5);

            // Animate the terminal.
            animate(
                terminalElement,
                { bottom: `${bottom}rem` },
                { duration: 200, queue: false }
            )
            .then(() => (
                    layout.terminal.isOpen ? inputElement.focus() : inputElement.blur()
                )
            );
        }
    }

    onChange(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({ value: event.target.value });
    }

    onKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void {
        const { history } = this.props;

        if(event.keyCode === 13) {
            switch(this.state.value) {
                case '/asteroids':
                    this.props.openAsteroids();
                    this.props.closeTerminal();

                    break;
                case '/exit':
                    this.props.closeTerminal();

                    break;
                case routes.about:
                    history.push(routes.about);

                    break;
                case routes.contact:
                    history.push(routes.contact);

                    break;
                case routes.home:
                    history.push('/');

                    break;
                case routes.portfolio:
                    history.push(routes.portfolio);

                    break;
                default:
                    break;
            }

            // Reset the terminal.
            this.setState({ value: '' });
        }
    }

    render(): JSX.Element {
        return (
            <Wrapper innerRef={this.terminalRef as any}>
                <InputContainer>
                    <Input
                        autoComplete="off"
                        onChange={this.onChange}
                        onKeyDown={this.onKeyDown}
                        innerRef={this.inputRef as any}
                        type="text"
                        value={this.state.value} />
                </InputContainer>
            </Wrapper>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    closeAsteroids: bindActionCreators(closeAsteroids, dispatch),
    closeTerminal: bindActionCreators(closeTerminal, dispatch),
    openAsteroids: bindActionCreators(openAsteroids, dispatch),
});
const mapStateToProps = (state: ApplicationState) => {
    return {
        layout: state.layout,
    }
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Terminal)
);
export {
    Terminal,
    Props,
    State
};
