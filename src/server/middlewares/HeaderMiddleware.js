// Config.
import { defaults, strings } from '../../common/index';
import packageJson from '../../../package.json';

/**
 * Convenience function that sets the default headers.
 * @param response the Response object.
 */
function setDefaultHeaders(response) {
    response.set(defaults.headers.appVersion, packageJson.version);
    response.set(defaults.headers.drivenBy, strings.unicorns);
}

/**
 * A function that sets the standard response headers.
 * @param request the Request.
 * @param response the Response.
 * @param next the callback.
 */
export function setResponseHeaders(request, response, next) {
    setDefaultHeaders(response);

    next();
}

/**
 * A function that sets the response headers for static assets.
 * @param response the Response.
 */
export function setStaticResponseHeaders(response) {
    setDefaultHeaders(response);
}

