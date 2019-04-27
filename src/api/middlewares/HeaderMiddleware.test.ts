import { Response, Request } from 'express';
import * as httpMocks from 'node-mocks-http';
import { assert, SinonSpy, spy } from 'sinon';

// Config.
import { headers } from '../../common/defaults';
import { unicorns } from '../../common/strings';

// Middleware.
import {
  setResponseHeaders,
  setStaticResponseHeaders,
} from './HeaderMiddleware';

interface Scope {
  request: Request;
  response: Response;
  nextSpy: SinonSpy;
}

describe('middlewares/HeaderMiddleware', () => {
  let scope: Scope;

  beforeEach(() => {
    scope = {
      request: httpMocks.createRequest(),
      response: httpMocks.createResponse(),
      nextSpy: spy(),
    };
  });

  describe('setResponseHeaders()', () => {
    it('should add a new "driven-by" header', () => {
      setResponseHeaders(scope.request, scope.response, scope.nextSpy);

      expect(scope.response.getHeader(headers.drivenBy)).toBe(unicorns);

      assert.calledWith(scope.nextSpy);
    });
  });

  describe('setStaticResponseHeaders()', () => {
    it('should add a new "driven-by" header', () => {
      setStaticResponseHeaders(scope.response);

      expect(scope.response.getHeader(headers.drivenBy)).toBe(unicorns);
    });
  });
});
