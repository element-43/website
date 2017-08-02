process.env.NODE_ENV = (process.env.NODE_ENV || 'development');

import bodyParser from 'body-parser';
import { config } from 'dotenv';
import express from 'express';
import expressValidator from 'express-validator';
import helmet from 'helmet';
import { Server } from 'http';
import httpCodes from 'http-codes';
import path from 'path';

// Middleware.
import { setResponseHeaders, setStaticResponseHeaders } from './middlewares/HeaderMiddleware';

// API.
import { PostRoute } from './api/index';

const app = express();
const rootPath = path.resolve(__dirname, '..', '..');
const server = Server(app);
const staticPath = path.resolve(rootPath, 'dist', 'client');

//====================================================
// Configuration.
//====================================================

config({ path: path.resolve(rootPath, '.env') });

//====================================================
// Middleware.
//====================================================

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(setResponseHeaders);

// Serve static assets.
app.use(express.static(staticPath, { setHeaders: setStaticResponseHeaders }));

//====================================================
// API.
//====================================================

PostRoute.create(app);

//====================================================
// Routes.
//====================================================

// Route all other requests back to the client HTML.
app.get('*', (request, response) => response.sendFile(path.resolve(staticPath, 'index.html')));

//====================================================
// Errors...gotta catch 'em all.
//====================================================

app.use((error, request, response, next) => {
    if(error) {
        return response.status(error.status || httpCodes.INTERNAL_SERVER).json({ errors: error.errors });
    }

    next();
});

//====================================================
// Start server.
//====================================================

server.listen(process.env.PORT, () => {
    /* eslint-disable no-console */
    console.log('The unicorns gallop away on port ' + server.address().port);
    /* eslint-enable no-console */
});

// Export for testing.
export default app;

