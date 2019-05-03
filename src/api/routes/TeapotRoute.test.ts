import { IM_A_TEAPOT } from 'http-status-codes';
import { agent } from 'supertest';

// Enums.
import { EndpointsEnum } from '../../common/enums';

// Express app.
import app from '../app';

describe(`${EndpointsEnum.Base}${EndpointsEnum.Teapot}`, () => {
  describe('GET /teapot', () => {
    it('should return with a status of 418', async () => {
      await agent(app)
        .get(`${EndpointsEnum.Base}${EndpointsEnum.Teapot}`)
        .expect(IM_A_TEAPOT);
    });
  });
});
