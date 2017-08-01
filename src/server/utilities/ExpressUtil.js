import _ from 'lodash';

/**
 * Returns the express validation errors as a string array.
 * @param errors the express validation errors.
 * @return a string array of the express validation error messages.
 */
export function getExpressValidationErrors(errors = []) {
    return _.map(errors, object => object.msg);
}
