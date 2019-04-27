import { NextFunction, Request, Response } from 'express';

// Exceptions.
import RequestException from '../exceptions/RequestException';

export function customError(
  error: Error | RequestException | undefined,
  request: Request,
  response: Response,
  next: NextFunction
): Response | void {
  if (error && error instanceof RequestException) {
    return response.status(error.status).json(error.errors);
  }

  next(error);
}
