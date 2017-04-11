import _ from 'lodash';

/**
 * Returns the express validation errors as a string array.
 * @param errors the express validation errors.
 * @return a string array of the express validation error messages.
 */
export function getExpressValidationErrors(errors) {
    return _.map(errors, object => object.msg);
}

/**
 * Returns a random port between the ranges of 49152–65535.
 * @return a random port.
 */
export function randomPort() {
    return _.random(49152, 65535);
}
