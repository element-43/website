import _ from 'lodash';
import moment from 'moment';
import cookie from 'react-cookie';

// Config.
import defaults from '../../../config/defaults';

// Actions.
import { SessionActions } from '../actions/index';

// States.
import { SessionState as initialState } from '../states/index';

function SessionReducer(state = initialState, action) {
    switch (action.type) {
        case SessionActions.SET_ENABLED_COOKIE:
            // Save the cookies to the browser.
            cookie.save(defaults.cookieKeys.enabled, true, {
                path: '/',
                expires: moment().add(1, 'y').toDate() // Today's date + 1 year.
            });

            return _.assign({}, state, { enabledCookie: true });
        default:
            return state;
    }
}

export default SessionReducer;
