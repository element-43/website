import {
    Request,
    Response
} from 'express';
import { IM_A_TEAPOT } from 'http-status-codes';

// Config.
import { endpoints } from '../../common/defaults';
import { teapotError } from '../../common/errors';

// Routes.
import BaseRoute, { Method } from './BaseRoute';

class TeapotRoute extends BaseRoute {
    constructor() {
        super();

        this.routes = [
            {
                callback: this.getTeapot.bind(this),
                method: Method.Get,
                route: `${endpoints.api.teapot}`,
            }
        ];
    }

    private async getTeapot(request: Request, response: Response): Promise<void> {
        response.status(IM_A_TEAPOT).send(teapotError);
    }
}

export {
    TeapotRoute as default
};
