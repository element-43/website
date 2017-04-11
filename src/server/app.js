process.env.NODE_ENV = (process.env.NODE_ENV || 'development');

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import httpCodes from 'http-codes';
import keystone from 'keystone';
import path from 'path';

import { HeaderMiddleware } from './middlewares/index';
import { ExpressUtil } from './utilities/index';

import defaults from '../../config/defaults';
import strings from '../../config/strings';

const app = express();
const port = (process.env.NODE_ENV === 'test' ? ExpressUtil.randomPort() : defaults.port); // Use a random port when testing.
const rootPath = path.resolve(__dirname, '..', '..');
const staticPath = path.resolve('..', 'public');
let webpack, webpackCompiler, webpackDevConfig, webpackDevMiddleware, webpackHotMiddleware;

//====================================================
// Configuration.
//====================================================

dotenv.config({ path: path.resolve(rootPath, '.env') });

//====================================================
// Middleware.
//====================================================

app.use(helmet());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(HeaderMiddleware.addResponseHeaders);

// Use hot reloading in development; serve from memory.
if (process.env.NODE_ENV === 'development') {
    webpack = require('webpack');
    webpackDevMiddleware = require('webpack-dev-middleware');
    webpackHotMiddleware = require('webpack-hot-middleware');
    webpackDevConfig = require('../../webpack.dev.config.js');
    webpackCompiler = webpack(webpackDevConfig);

    app.use(webpackDevMiddleware(webpackCompiler, {
        publicPath: webpackDevConfig.output.publicPath,
        stats: { colors: true }
    }));

    /* eslint-disable no-console */
    app.use(webpackHotMiddleware(webpackCompiler, { log: console.log }));
    /* eslint-enable no-console */
}
else {
    // Serve static assets.
    app.use(express.static(staticPath, { setHeaders: HeaderMiddleware.addStaticResponseHeaders }));
}

//====================================================
// Routes.
//====================================================

app.get('*', (request, response) => response.sendFile(path.resolve(staticPath, 'index.html')));

//====================================================
// Errors...gotta catch 'em all.
//====================================================

app.use((error, request, response, next) => {
    if(error) {
        return response.status(error.status || httpCodes.INTERNAL_SERVER_ERROR).json({ errors: error.errors });
    }

    next();
});

//====================================================
// Keystone initialisation.
//====================================================

keystone.init({
    // Project settings.
    'name': strings.appTitle,
    'brand': strings.appTitle,

    // Web server.
    'port': port,

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

// Export for testing.
export { app };
