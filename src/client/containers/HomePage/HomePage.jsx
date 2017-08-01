import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

// Config.
import { defaults, strings } from '../../../common/index';

// Utilities.
import { getHelmet } from '../../utilities/ApplicationUtil';

// Components.
import Button from '../../components/Button/Button';

// Styles.
import styles from './HomePage.css';

class HomePage extends Component {
    static propTypes = {
        history: PropTypes.object
    };
    
    onMouseOver() {

    }

    render() {
        return (
            <main>
                { getHelmet(`${strings.document.title} | ${strings.pages.home.title}`) }
                <Button
                    label={ strings.pages.about.title }
                    onClick={ () => this.props.history.push(defaults.routes.about) } />
            </main>
        );
    }
}

export default CSSModules(HomePage, styles);
