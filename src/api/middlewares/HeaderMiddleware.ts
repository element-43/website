import { NextFunction, Request, Response } from 'express';

// Enums.
import { HeadersEnum } from '../../common/enums';

// Strings.
import { Headers } from '../../common/strings';

/**
 * Convenience function that sets the default headers.
 * @param response the Response object.
 */
function setDefaultHeaders(response: Response) {
  response.set(HeadersEnum.XDrivenBy, Headers.POWERED_BY);
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
