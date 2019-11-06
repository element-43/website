import { Logger } from 'winston';

// Types.
import { IApiOptions } from './types';

export default class BaseApi {
  protected logger: Logger;

  constructor(options: IApiOptions) {
    this.logger = options.logger;
  }
}
