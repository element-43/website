import keystone from 'keystone';

// Config.
import defaults from '../../config/defaults';
import strings from '../../config/strings';

// Express.
import app from './app';

keystone.init({
    // Project.
    'name': strings.document.title,
    'brand': strings.document.title,

    // Web server.
    'port': defaults.port,

    // Database.
    'auto update': true,
    'mongo': process.env.MONGO_URI,
    'updates': 'updates',
    'session': false,
    'auth': true,
    'user model': 'User',
    'cookie secret': process.env.COOKIE_SECRET
});

keystone.import('models'); // Register the models.

// Set the separate express app.
keystone.set('routes', app);

// Set the navigation of the CMS.
keystone.set('nav', {
    users: 'users',
    content: ['posts', 'post-categories']
});

// Ready, steady... GO!!
keystone.start();
