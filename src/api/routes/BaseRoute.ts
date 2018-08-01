import { Express, NextFunction, Request, Response } from 'express';
import { ValidationChain } from 'express-validator/check';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from 'http-status-codes';

// Config.
import { endpoints } from '../../common/defaults';
import { serverError } from '../../common/errors';

// Exceptions.
import RequestException from '../exceptions/RequestException';

export enum Method {
    Delete = 'DELETE',
    Get = 'GET',
    Patch = 'PATCH',
    Post = 'POST',
}

export interface RouteDeclaration {
    callback: (request: Request, response: Response, next: NextFunction) => void;
    method: Method;
    route: string;
    validators?: Array<ValidationChain>,
}

class BaseRoute {
    protected routes: Array<RouteDeclaration> = [];

    /**
     * A curried function that simply handles the errors spat out from the promise chain.
     * @param next a bound callback from an express route.
     * @param error the error provided by the wrapper function.
     */
    protected handleError(next: NextFunction, error: Error | RequestException): void {
        if(error instanceof RequestException) {
            return next(error);
        }

        return next(new RequestException(INTERNAL_SERVER_ERROR, [serverError]));
    }

    protected handleValidationError(next: NextFunction, errors: any[]): void {

        const exception = new RequestException(
            BAD_REQUEST,
            errors.map((value: any) => value.msg),
        );

        return this.handleError(next, exception);
    }

    /**
     * Registers all routes to the Express application object, as specified in the routes property.
     * @param {Express} app an instance of an Express app.
     */
    public registerRoutes(app: Express): void {
        this.routes
        .forEach((value: RouteDeclaration) => {
            app[(value.method as string).toLowerCase()](
                `${endpoints.api.base}${value.route}`,
                value.validators || [],
                value.callback
            );
        });
    }
}

export {
    BaseRoute as default
};
