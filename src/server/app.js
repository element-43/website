process.env.NODE_ENV = (process.env.NODE_ENV || 'development');

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import httpCodes from 'http-codes';
import path from 'path';

// Config.
import defaults from '../../config/defaults';

// Utilities.
import { HeaderMiddleware } from './middlewares/index';

// Routes.
import createRoutes from './api/router';

const app = express();
//const port = (process.env.NODE_ENV === 'test' ? ExpressUtil.randomPort() : defaults.port); // Use a random port when testing.
const rootPath = path.resolve(__dirname, '..', '..');
let webpack, webpackCompiler, webpackDevConfig, webpackDevMiddleware, webpackHotMiddleware, indexRouter, staticPath;

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

    staticPath = webpackDevConfig.output.publicPath;
    indexRouter = (request, response, next) => {
        const filePath = path.join(webpackCompiler.outputPath, 'index.html');

        // Read the index file from the file system.
        webpackCompiler.outputFileSystem.readFile(filePath, (error, result) => {
            if (error) {
                return next(error);
            }

            // Send file.
            response.set('content-type','text/html');
            response.send(result);
            response.end();
        });
    };
}
else {
    staticPath = path.resolve(rootPath, 'dist', 'public');
    indexRouter = (request, response) => response.sendFile(path.resolve(staticPath, 'index.html'));
}

// Serve static assets.
app.use(express.static(staticPath, { setHeaders: HeaderMiddleware.addStaticResponseHeaders }));

//====================================================
// Routes.
//====================================================

// API routes.
app.use(defaults.endpoints.api, createRoutes(express));

// Use client-side routing.
app.get('*', indexRouter);

//====================================================
// Errors...gotta catch 'em all.
//====================================================

app.use((error, request, response, next) => {
    if(error) {
        return response.status(error.status || httpCodes.INTERNAL_SERVER_ERROR).json({ errors: error.errors });
    }

    next();
});

export default app;
