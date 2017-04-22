import httpCodes from 'http-codes';

// Config.
import errors from '../../../config/errors';

// Utilities.
import { ErrorUtil } from '../utilities/index';

export default class BaseRoute {
    constructor(router) {
        this.router = router;
    }

    /**
     * A curried function that simply handles the errors spat out from the promise chain.
     * @param next a bound callback from an express route.
     * @param error the error provided by the wrapper function.
     */
    handleError(next, error) {
        // Non-custom error.
        if(error.name !== 'RequestError') {
            return next(ErrorUtil.createRequestError(httpCodes.INTERNAL_SERVER_ERROR, [errors.serverError]));
        }

        next(error);
    }
}
