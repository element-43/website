import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Velocity from 'velocity-animate';

// Config.
import { defaults } from '../../../common/index';

// Styles.
import styles from './Terminal.css';

// ActionCreators.
import { closeTerminal } from '../../action-creators/AppicationActionCreators';

// Utilities.
import { cssModulesOptions } from '../../utilities/StylesUtil';

class Terminal extends Component {
    static propTypes = {
        application: PropTypes.object,
        dispatch: PropTypes.func,
        history: PropTypes.object
    };

    constructor() {
        super();

        this.inputElement = null;
        this.terminalElement = null;
        this.state = {
            value: ''
        };
    }

    componentWillReceiveProps(props) {
        let bottom;

        if(this.terminalElement) {
            bottom = (props.application.terminal.isOpen ? 0 : -4.5);

            // Animate the terminal.
            Velocity(this.terminalElement, { bottom: `${bottom}rem` }, { duration: 200, queue: false })
                .then(() => (props.application.terminal.isOpen ? this.inputElement.focus() : this.inputElement.blur()));
        }
    }

    onChange(event) {
        this.setState({ value: event.target.value });
    }

    onKeyDown(event) {
        if(event.keyCode === 13) {
            switch(this.state.value) {
                case defaults.routes.about:
                    this.props.history.push(defaults.routes.about);

                    break;
                case defaults.routes.blog:
                    this.props.history.push(defaults.routes.blog);

                    break;
                case defaults.routes.contact:
                    this.props.history.push(defaults.routes.contact);

                    break;
                case defaults.routes.home:
                    this.props.history.push('/');

                    break;
                case defaults.routes.portfolio:
                    this.props.history.push(defaults.routes.portfolio);

                    break;
                case '/quit':
                    this.props.dispatch(closeTerminal());

                    break;
                default:
                    break;
            }

            // Reset the terminal.
            this.setState({ value: '' });
        }
    }

    render() {
        return (
            <div
                ref={ (node => this.terminalElement = node) }
                styleName="terminal">
                <div styleName="inner">
                    <input
                        onChange={ this.onChange.bind(this) }
                        onKeyDown={ this.onKeyDown.bind(this) }
                        ref={ (node => this.inputElement = node) }
                        styleName="input"
                        type="text"
                        value={ this.state.value }/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        application: state.application
    };
}

export default withRouter(connect(mapStateToProps)(CSSModules(Terminal, styles, cssModulesOptions)));
export { Terminal as TerminalTest }; // Export for testing.
