import _ from 'lodash';
import httpMocks from 'node-mocks-http';

// Config.
import defaults from '../../../config/defaults';
import packageJson from '../../../package.json';

// Module.
import { addResponseHeaders, addStaticResponseHeaders } from './HeaderMiddleware';

describe('middlewares/header', () => {
    beforeEach(function() {
        this.response = httpMocks.createResponse();

        this.nextSpy = spy();
    });

    afterEach(function() {
        this.response = _.noop();

        this.nextSpy.reset();
    });

    describe('addResponseHeaders()', function() {
        it('should add a new "x-powered-by" header', function() {
            addResponseHeaders({}, this.response, this.nextSpy);

            expect(this.response.getHeader(defaults.headers.poweredBy)).to.equal('Unicorns');
            expect(this.response.getHeader(defaults.headers.appVersion)).to.equal(packageJson.version);

            assert.calledWith(this.nextSpy);
        });
    });

    describe('addStaticResponseHeaders()', function() {
        it('should add a new "x-powered-by" header', function() {
            addStaticResponseHeaders(this.response);

            expect(this.response.getHeader(defaults.headers.poweredBy)).to.equal('Unicorns');
        });
    });
});
