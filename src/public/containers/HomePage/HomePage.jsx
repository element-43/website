import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Config.
import defaults from '../../../../config/defaults';
import strings from '../../../../config/strings';

// Utilities.
import { getHelmet } from '../../utilities/application.util';

// Components.
import Button from '../../components/Button/Button';
import SocialButton from '../../components/SocialButton/SocialButton';

class HomePage extends Component {
    render() {
        return (
            <main>
                { getHelmet(strings.document.title + ' | ' + strings.page.home.title) }
                <Button
                    label={ strings.page.about.title }
                    onClick={ () => this.props.history.push(defaults.routes.about) } />
                <SocialButton
                    href="https://twitter.com/kieranroneill"
                    type="twitter" />
            </main>
        );
    }
}

HomePage.propTypes = {
    history: PropTypes.object
};

export default HomePage;
