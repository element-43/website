// Config.
import errors from '../../common/errors';

// Module.
import { getExpressValidationErrors } from './ExpressUtil';

describe('utilities/ExpressUtil', () => {
    describe('getExpressValidationErrors()', () => {
        it('should return an empty array if input is undefined', () => {
            expect(getExpressValidationErrors()).to.have.be.empty;
        });

        it('should return an empty array if the input is an empty array', () => {
            expect(getExpressValidationErrors([])).to.have.be.empty;
        });

        it('should return the error messages', () => {
            const expressErrors = [{
                param: 'email',
                msg: errors.emailInvalid,
                value: 'not an email address, silly!'
            }];

            expect(getExpressValidationErrors(expressErrors)).to.contains(errors.emailInvalid);
        });
    });
});
