import { load } from 'react-cookies';

// Config.
import { defaults } from '../../common/index';

export default {
    enabledCookie: (load(defaults.cookieKeys.enabled) ? true : false) // Check if the cookie exists.
};
