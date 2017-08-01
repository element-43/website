import _ from 'lodash';
import httpCodes from 'http-codes';

// Config.
import defaults from '../../common/defaults';
import errors from '../../common/errors';

// Utility.
import { createRequestError } from '../utilities/ErrorUtil';

export default class Router {
    get routes() {
        return {};
    }

    constructor(app) {
        this.app = app;

        this.registerRoutes();
    }

    /**
     * Convenience function for instantiating the Router object.
     * @param app the Express application.
     * @returns {Router} an instantiated router object.
     */
    static create(app) {
        return new this(app);
    }

    /**
     * A curried function that simply handles the errors spat out from the promise chain.
     * @param next a bound callback from an express route.
     * @param error the error provided by the wrapper function.
     */
    handleError(next, error) {
        if(!_.has(error, 'status')) {
            return next(createRequestError(httpCodes.INTERNAL_SERVER_ERROR, [errors.serverError]));
        }

        next(error);
    }

    /**
     * Registers all routes to the Express application object, as specified in the routes property.
     */
    registerRoutes() {
        _.forIn(this.routes, (value, key) => {
            const verb = key.split(' ')[0].toLowerCase();
            const route = defaults.endpoints.api.base + key.split(' ')[1];

            this.app[verb](route, this[value].bind(this));
        });
    }
}
