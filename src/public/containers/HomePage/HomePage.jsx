import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Config.
import defaults from '../../../../config/defaults';
import strings from '../../../../config/strings';

// Utilities.
import { getHelmet } from '../../utilities/application.util';

// Components.
import Button from '../../components/Button/Button';

class HomePage extends Component {
    render() {
        return (
            <main>
                { getHelmet(strings.document.title + ' | ' + strings.page.home.title) }
                <Button
                    label={ strings.page.about.title }
                    onClick={ () => this.props.location.push(defaults.routes.about) } />
            </main>
        );
    }
}

HomePage.propTypes = {
    location: PropTypes.object
};

export default HomePage;
