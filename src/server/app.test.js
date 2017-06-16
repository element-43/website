import httpCodes from 'http-codes';

// Config.
import defaults from '../../config/defaults';
import packageJson from '../../package.json';

// Helpers.
import { requestByMethod } from '../../test/helpers';

describe('server', () => {
    const route = '/';

    describe('headers', function() {
        it('should return the correct headers for HTML pages', function(done) {
            requestByMethod('GET', route)
                .expect(httpCodes.OK)
                .end((error, response) => {
                    expect(error).to.equal(null);

                    expect(response.headers).to.have.property(defaults.headers.poweredBy.toLowerCase());
                    expect(response.headers[defaults.headers.poweredBy.toLowerCase()]).to.equal('Unicorns');

                    expect(response.headers).to.have.property(defaults.headers.appVersion.toLowerCase());
                    expect(response.headers[defaults.headers.appVersion.toLowerCase()]).to.equal(packageJson.version);

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
