import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

// Config.
import defaults from '../../../../config/defaults';
import strings from '../../../../config/strings';

// Utilities.
import { getHelmet } from '../../utilities/application.util';

// Components.
import Button from '../../components/Button/Button';

// Styles.
import styles from './HomePage.css';

class HomePage extends Component {
    onMouseOver() {

    }

    render() {
        return (
            <main>
                { getHelmet(strings.document.title + ' | ' + strings.page.home.title) }
                <Button
                    label={ strings.page.about.title }
                    onClick={ () => this.props.history.push(defaults.routes.about) } />
            </main>
        );
    }
}

HomePage.propTypes = {
    history: PropTypes.object
};

export default CSSModules(HomePage, styles);
