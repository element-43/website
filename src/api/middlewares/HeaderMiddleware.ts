import {
    NextFunction,
    Request,
    Response
} from 'express';

// Config.
import { headers } from '../../common/defaults';
import { unicorns } from '../../common/strings';

/**
 * Convenience function that sets the default headers.
 * @param response the Response object.
 */
function setDefaultHeaders(response: Response) {
    response.set(headers.drivenBy, unicorns);
}

/**
 * A function that sets the standard response headers.
 * @param request the Request.
 * @param response the Response.
 * @param next the callback.
 */
export function setResponseHeaders(
    request: Request,
    response: Response,
    next: NextFunction
) {
    setDefaultHeaders(response);

    next();
}

/**
 * A function that sets the response headers for static assets.
 * @param response the Response.
 */
export function setStaticResponseHeaders(response: Response) {
    setDefaultHeaders(response);
}

