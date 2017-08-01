import express from 'express';

// Helpers.
import { getRoutes } from '../../../test/helpers';

// Module.
import Router from './Router';

describe('api/Router', () => {
    describe('registerRoutes()', () => {
        it('should not register an routes when the route object is empty', () => {
            const router = new Router(express());
            const routes = getRoutes(router.app);

            expect(routes).to.be.empty;
        });
    });
});
