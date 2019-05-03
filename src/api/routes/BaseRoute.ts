import { Express, NextFunction, Request, Response } from 'express';
import { ValidationChain } from 'express-validator/check';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from 'http-status-codes';

// Enums.
import { EndpointsEnum, HttpMethodEnum } from '../../common/enums';

// Exceptions.
import RequestException from '../exceptions/RequestException';

// Strings.
import { Errors } from '../../common/strings';

export interface RouteDeclaration {
  callback: (request: Request, response: Response, next: NextFunction) => void;
  method: HttpMethodEnum;
  route: string;
  validators?: Array<ValidationChain>;
}

class BaseRoute {
  protected routes: Array<RouteDeclaration> = [];

  /**
   * A curried function that simply handles the errors spat out from the promise chain.
   * @param next a bound callback from an express route.
   * @param error the error provided by the wrapper function.
   */
  protected handleError(
    next: NextFunction,
    error: Error | RequestException
  ): void {
    if (error instanceof RequestException) {
      return next(error);
    }

    return next(
      new RequestException(INTERNAL_SERVER_ERROR, [Errors.ServerError])
    );
  }

  protected handleValidationError(next: NextFunction, errors: any[]): void {
    const exception = new RequestException(
      BAD_REQUEST,
      errors.map((value: any) => value.msg)
    );

    return this.handleError(next, exception);
  }

  /**
   * Registers all routes to the Express application object, as specified in the routes property.
   * @param {Express} app an instance of an Express app.
   */
  public registerRoutes(app: Express): void {
    this.routes.forEach((value: RouteDeclaration) => {
      app[(value.method as string).toLowerCase()](
        `${EndpointsEnum.Base}${value.route}`,
        value.validators || [],
        value.callback
      );
    });
  }
}

export { BaseRoute as default };
