import packageJson from '../../../package.json';
import defaults from '../../../config/defaults';

export function addResponseHeaders(request, response, next) {
    response.set(defaults.headers.poweredBy, 'Unicorns');
    response.set(defaults.headers.appVersion, packageJson.version);

    next();
}

export function addStaticResponseHeaders(response) {
    response.set(defaults.headers.poweredBy, 'Unicorns');
}
