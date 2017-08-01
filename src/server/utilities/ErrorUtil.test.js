import httpCodes from 'http-codes';

// Module.
import { createRequestError } from './ErrorUtil';

describe('utilities/ErrorUtil', () => {
    describe('createRequestError()', () => {
        it('should throw the default error if nothing is defined', () => {
            const error = createRequestError();

            expect(error).to.have.property('status');
            expect(error.status)
                .to.be.a('number')
                .to.equal(httpCodes.BAD_REQUEST);

            expect(error).to.have.property('errors');
            expect(error.errors)
                .to.be.an('array')
                .to.be.empty;

            expect(error).to.have.property('message');
            expect(error.message)
                .to.be.a('string')
                .to.be.empty;
        });

        it('should throw a bad request error if the status code is not a valid request error code', () => {
            const error = createRequestError(123);

            expect(error).to.have.property('status');
            expect(error.status)
                .to.be.a('number')
                .to.equal(httpCodes.BAD_REQUEST);
        });

        it('should throw an error with the correct parameters', () => {
            const message = 'An error occurred while displaying the previous error';
            const error = createRequestError(httpCodes.UNAUTHORIZED, [message]);

            expect(error).to.have.property('status');
            expect(error.status)
                .to.be.a('number')
                .to.equal(httpCodes.UNAUTHORIZED);

            expect(error).to.have.property('errors');
            expect(error.errors)
                .to.be.an('array')
                .to.include(message);
        });
    });
});
