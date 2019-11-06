import { Request, Response, Router } from 'express';
import { IM_A_TEAPOT } from 'http-status-codes';

// APIs.
import BaseApi from './base';

// Constants.
import { Errors } from '../../common/constants';

// Enums.
import { ApiEndpointsEnum } from '../../common/enums/api';

// Types.
import { IApiOptions } from './types';

export default class TeapotApi extends BaseApi {
  /**
   * Create the endpoints.
   * @param {Router} router an Express router.
   * @param {IApiOptions} options options passed to the route.
   */
  public static create(router: Router, options: IApiOptions): void {
    const teapotApi: TeapotApi = new TeapotApi(options);

    router.get(ApiEndpointsEnum.Teapot, teapotApi.getTeapot.bind(teapotApi));
  }

  private async getTeapot(req: Request, res: Response): Promise<void> {
    res.status(IM_A_TEAPOT).send(Errors.TeapotError);
  }
}
