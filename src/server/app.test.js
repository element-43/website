import httpCodes from 'http-codes';

// Config.
import { defaults, strings } from '../common/index';

// Helpers.
import { getRoutes, requestByMethod } from '../../test/helpers';

describe('server/app', () => {
    describe('headers', () => {
        it('should return the correct headers for requests', done => {
            requestByMethod('GET', '/')
                .end((error, response) => {
                    expect(error).to.equal(null);

                    expect(response.headers).to.have.property(defaults.headers.drivenBy.toLowerCase());
                    expect(response.headers[defaults.headers.drivenBy.toLowerCase()]).to.equal(strings.unicorns);

                    done();
                });
        });
    });

    describe('/', () => {
        it('should serve a HTML document at the base route', done => {
            requestByMethod('GET', '/')
                .expect(httpCodes.OK)
                .end((error, response) => {
                    expect(error).to.equal(null);

                    expect(response.type).to.equal('text/html');

                    done();
                });
        });
    });

    describe('/api', () => {
        const apiRoute = '/api{+endpoint}';

        it('should contain the specified routes', () => {
            const routes = getRoutes(app);

            expect(routes).to.include(apiRoute.replace('{+endpoint}', defaults.endpoints.api.post));
        });
    });
});
