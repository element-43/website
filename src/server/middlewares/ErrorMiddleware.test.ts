import { Request, Response } from 'express';
import { BAD_REQUEST } from 'http-status-codes';
import * as httpMocks from 'node-mocks-http';
import { assert, SinonSpy, SinonStub, spy, stub } from 'sinon';

// Exceptions.
import RequestException from '../exceptions/RequestException';

// Middlewares.
import { customError } from './ErrorMiddlware';

interface Scope {
  nextStub: SinonStub;
  request: Request;
  response: Response;
}

describe('middlewares/ErrorMiddleware', () => {
  let scope: Scope;

  beforeEach(() => {
    scope = {
      nextStub: stub(),
      request: httpMocks.createRequest(),
      response: httpMocks.createResponse(),
    };
  });

  describe('customError()', () => {
    it('should send response with custom errors', () => {
      const exception: RequestException = new RequestException(BAD_REQUEST, [
        'the end of the world',
      ]);
      const jsonSpy: SinonSpy = spy(scope.response, 'json');

      customError(exception, scope.request, scope.response, scope.nextStub);

      expect(scope.response.statusCode).toBe(BAD_REQUEST);

      assert.calledWith(jsonSpy, exception.errors);
      assert.notCalled(scope.nextStub);
    });

    it('should not return a custom error if it is not request exception', () => {
      const error: Error = new Error();

      customError(error, scope.request, scope.response, scope.nextStub);

      assert.calledWith(scope.nextStub, error);
    });
  });
});
