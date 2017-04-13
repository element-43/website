import keystone from 'keystone';

// Config.
import defaults from '../../config/defaults';
import strings from '../../config/strings';

// Express.
import app from './app';

keystone.init({
    // Project settings.
    'name': strings.document.title,
    'brand': strings.document.title,

    // Web server.
    'port': defaults.port,

    'auto update': true,
    'mongo': process.env.MONGO_URI,
    'updates': 'updates',

    'session': false,
    'auth': true,
    'user model': 'User',
    'cookie secret': process.env.COOKIE_SECRET
});

keystone.import('models');
keystone.set('routes', app);
keystone.start();
