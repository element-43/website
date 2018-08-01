import {
    Express,
    Request,
    Response,
    static as serveStatic
} from 'express';
import { resolve } from 'path';

// Middleware.
import { setStaticResponseHeaders } from './middlewares/HeaderMiddleware';

// Routes.
import TeapotRoute from './routes/TeapotRoute';

type Route = TeapotRoute;

export function webRoutes(app: Express): void {
    const rootPath = resolve(__dirname, '..', '..');
    const staticPath = resolve(rootPath, 'dist', 'web');

    // Serve static assets.
    app.use(serveStatic(staticPath, { setHeaders: setStaticResponseHeaders }));

    // Route all other requests back to the client HTML.
    app.get('*', (request: Request, response: Response) => response.sendFile(resolve(staticPath, 'index.html')));
}

export function apiRoutes(app: Express): void {
    const routes: Array<Route> = [
        new TeapotRoute()
    ];

    // Set up api routes.
    routes.forEach((route: Route) => route.registerRoutes(app));
}
