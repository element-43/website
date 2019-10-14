import { json, urlencoded } from 'body-parser';
import * as CookieParser from 'cookie-parser';
import { config } from 'dotenv';
import * as Express from 'express';
import * as Helmet from 'helmet';

// Middlewares.
import { customError } from './middlewares/ErrorMiddlware';
import { setResponseHeaders } from './middlewares/HeaderMiddleware';

// Router.
import { apiRoutes, webRoutes } from './router';

const app = Express();

// ====================================================
// Configuration.
// ====================================================

config();

// ====================================================
// Middleware.
// ====================================================

app.use(Helmet());
app.use(CookieParser(process.env.COOKIE_SECRET));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(setResponseHeaders);

// ====================================================
// Routes.
// ====================================================

apiRoutes(app);
webRoutes(app);

// Catch the errors.
app.use(customError);

export default app;
