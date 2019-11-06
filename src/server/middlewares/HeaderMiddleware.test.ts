import { Request, Response } from 'express';
import * as httpMocks from 'node-mocks-http';

// Enums.
import { HeadersEnum } from '../../common/enums';

// Strings.
import { Headers } from '../../common/strings';

// Middleware.
import {
  setResponseHeaders,
  setStaticResponseHeaders,
} from './HeaderMiddleware';

interface Scope {
  request: Request;
  response: Response;
  nextSpy: jest.Mock;
}

describe('middlewares/HeaderMiddleware', () => {
  let scope: Scope;

  beforeEach(() => {
    scope = {
      request: httpMocks.createRequest(),
      response: httpMocks.createResponse(),
      nextSpy: jest.fn(),
    };
  });

  describe('setResponseHeaders()', () => {
    it('should add a new "driven-by" header', () => {
      setResponseHeaders(scope.request, scope.response, scope.nextSpy);

      expect(scope.response.getHeader(HeadersEnum.XDrivenBy)).toBe(
        Headers.POWERED_BY
      );
      expect(scope.nextSpy).toBeCalled();
    });
  });

  describe('setStaticResponseHeaders()', () => {
    it('should add a new "driven-by" header', () => {
      setStaticResponseHeaders(scope.response);

      expect(scope.response.getHeader(HeadersEnum.XDrivenBy)).toBe(
        Headers.POWERED_BY
      );
    });
  });
});
