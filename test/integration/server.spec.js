import { requestByMethod } from '../helpers';

import packageJson from '../../package.json';

describe('server', () => {
    const route = '/';

    describe('headers', function() {
        it('should return the correct headers for HTML pages', function(done) {
            requestByMethod('GET', route)
                .expect(httpCodes.OK)
                .end((error, response) => {
                    expect(error).to.equal(null);

                    expect(response.headers).to.have.property(strings.headers.POWERED_BY.toLowerCase());
                    expect(response.headers[strings.headers.POWERED_BY.toLowerCase()]).to.equal(strings.APP_TITLE);

                    expect(response.headers).to.have.property(strings.headers.APP_VERSION.toLowerCase());
                    expect(response.headers[strings.headers.APP_VERSION.toLowerCase()]).to.equal(packageJson.version);

                    done();
                });
        });
    });

    describe('serving html', function() {
        it('should serve a HTML document at the base route', function(done) {
            requestByMethod('GET', route)
                .expect(httpCodes.OK)
                .end((error, response) => {
                    expect(error).to.equal(null);

                    expect(response.type).to.equal('text/html');

                    done();
                });
        });
    });
});
