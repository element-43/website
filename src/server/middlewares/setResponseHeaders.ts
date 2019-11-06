import { NextFunction, Request, Response } from 'express';

// Constants.
import { Headers } from '../../common/constants';

// Enums.
import { HeadersEnum } from '../../common/enums/api';

/**
 * A middleware function that sets the standard response headers.
 * @param {Request} req the Request.
 * @param {Response} res the Response.
 * @param {NextFunction} next the callback.
 */
export default function(req: Request, res: Response, next: NextFunction): void {
  res.set(HeadersEnum.XDrivenBy, Headers.DRIVEN_BY);

  next();
}
