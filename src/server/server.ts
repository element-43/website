import { json, urlencoded } from 'body-parser';
import * as cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import * as Express from 'express';
import * as Helmet from 'helmet';
import * as morgan from 'morgan';
import { resolve } from 'path';
import { Logger } from 'winston';

// APIs.
import { TeapotApi } from './api';

// Enums.
import { ApiEndpointsEnum } from '../common/enums/api';

// Middlewares.
import errorHandler from './middlewares/errorHandler';
import setResponseHeaders from './middlewares/setResponseHeaders';

// Modules.
import { createLogger } from './modules/logger';

// Utils.
import setStaticResponseHeaders from './utils/setStaticResponseHeaders';

export class Server {
  public app: Express.Application;
  private readonly logger: Logger;

  constructor() {
    this.app = Express();
    this.logger = createLogger();

    this.config();
    this.api();
    this.routes();

    // Error handling.
    this.app.use(errorHandler);
  }

  /**
   * Creates the API endpoints.
   */
  private api(): void {
    const router: Express.Router = Express.Router();

    // Create the API endpoints.
    TeapotApi.create(router, {
      logger: this.logger,
    });

    this.app.use(ApiEndpointsEnum.Base, router);
  }

  /**
   * Configures the application.
   */
  private config(): void {
    // Source env file.
    config();

    // Setup some middlewares.
    this.app.use(morgan('dev'));
    this.app.use(Helmet());
    this.app.use(json());
    this.app.use(
      urlencoded({
        extended: true,
      })
    );
    this.app.use(cookieParser(process.env.COOKIE_SECRET));
    this.app.use(setResponseHeaders);
  }

  /**
   * Serves up content and the like.
   */
  private routes(): void {
    const rootPath: string = resolve(__dirname, '..', '..');
    const staticPath: string = resolve(rootPath, 'dist', 'web');

    // Serve static assets.
    this.app.use(
      Express.static(staticPath, {
        setHeaders: setStaticResponseHeaders,
      })
    );

    // Route all other requests back to the client HTML.
    this.app.get('*', (req: Express.Request, res: Express.Response) =>
      res.sendFile(resolve(staticPath, 'index.html'))
    );
  }
}
