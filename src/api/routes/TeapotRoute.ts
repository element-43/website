import { Request, Response } from 'express';
import { IM_A_TEAPOT } from 'http-status-codes';

// Enums.
import { EndpointsEnum, HttpMethodEnum } from '../../common/enums';

// Routes.
import BaseRoute from './BaseRoute';

// Strings.
import { Errors } from '../../common/strings';

class TeapotRoute extends BaseRoute {
  constructor() {
    super();

    this.routes = [
      {
        callback: this.getTeapot.bind(this),
        method: HttpMethodEnum.Get,
        route: `${EndpointsEnum.Teapot}`,
      },
    ];
  }

  private async getTeapot(request: Request, response: Response): Promise<void> {
    response.status(IM_A_TEAPOT).send(Errors.TeapotError);
  }
}

export { TeapotRoute as default };
