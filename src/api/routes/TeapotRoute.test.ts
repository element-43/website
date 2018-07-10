import { IM_A_TEAPOT } from 'http-status-codes';
import { agent } from 'supertest';

// Config.
import { endpoints } from '../../common/defaults';

// Express app.
import app from '../app';

describe(`${endpoints.api.base}${endpoints.api.teapot}`, () => {
    describe('GET /teapot', () => {
        it('should return with a status of 418', async () => {
            await agent(app)
                .get(`${endpoints.api.base}${endpoints.api.teapot}`)
                .expect(IM_A_TEAPOT);
        });
    });
});
