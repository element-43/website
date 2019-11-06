import { Response } from 'express';

// Constants.
import { Headers } from '../../common/constants';

// Enums.
import { HeadersEnum } from '../../common/enums/api';

export default function(res: Response): void {
  res.set(HeadersEnum.XDrivenBy, Headers.DRIVEN_BY);
}
