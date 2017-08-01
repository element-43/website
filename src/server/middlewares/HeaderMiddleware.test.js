import _ from 'lodash';
import httpMocks from 'node-mocks-http';

// Config.
import { defaults, strings } from '../../common/index';
import packageJson from '../../../package.json';

// Module.
import { setResponseHeaders, setStaticResponseHeaders } from './HeaderMiddleware';

describe('middlewares/HeaderMiddleware', () => {
    const scope = {
        response: null,
        nextSpy: null
    };

    beforeEach(() => {
        scope.response = httpMocks.createResponse();

        scope.nextSpy = spy();
    });

    afterEach(() => {
        scope.response = _.noop();

        scope.nextSpy.reset();
    });

    context('setResponseHeaders()', () => {
        it('should add a new "x-driven-by" header', () => {
            setResponseHeaders({}, scope.response, scope.nextSpy);

            expect(scope.response.getHeader(defaults.headers.drivenBy)).to.equal(strings.unicorns);
            expect(this.response.getHeader(defaults.headers.appVersion)).to.equal(packageJson.version);

            assert.calledWith(scope.nextSpy);
        });
    });

    context('setStaticResponseHeaders()', () => {
        it('should add a new "x-driven-by" header', () => {
            setStaticResponseHeaders(scope.response);

            expect(scope.response.getHeader(defaults.headers.drivenBy)).to.equal(strings.unicorns);
        });
    });
});
