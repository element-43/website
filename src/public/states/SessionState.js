import cookie from 'react-cookie';

// Config.
import defaults from '../../../config/defaults';

export default {
    enabledCookie: (cookie.load(defaults.cookieKeys.enabled) ? true : false) // Check if the cookie exists.
};
