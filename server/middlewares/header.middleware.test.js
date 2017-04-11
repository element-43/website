import * as HeaderMiddleware from './header.middleware';

import packageJson from '../../package.json';

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
            HeaderMiddleware.addResponseHeaders({}, this.response, this.nextSpy);

            expect(this.response.getHeader(strings.headers.POWERED_BY)).to.equal(strings.APP_TITLE);
            expect(this.response.getHeader(strings.headers.APP_VERSION)).to.equal(packageJson.version);

            assert.calledWith(this.nextSpy);
        });
    });

    describe('addStaticResponseHeaders()', function() {
        it('should add a new "x-powered-by" header', function() {
            HeaderMiddleware.addStaticResponseHeaders(this.response);

            expect(this.response.getHeader(strings.headers.POWERED_BY)).to.equal(strings.APP_TITLE);
        });
    });
});
