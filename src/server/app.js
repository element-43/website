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

// Middleware.
import { HeaderMiddleware } from './middlewares/index';

// Routes.
import createRoutes from './api/router';

const app = express();
const rootPath = path.resolve(__dirname, '..', '..');
const staticPath = path.resolve(rootPath, 'dist', 'public');

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

// Serve static assets.
app.use(express.static(staticPath, { setHeaders: HeaderMiddleware.addStaticResponseHeaders }));

//====================================================
// Routes.
//====================================================

// API routes.
app.use(defaults.endpoints.api.base, createRoutes(express));

// Use client-side routing.
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

export default app;
