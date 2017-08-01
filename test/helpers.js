import { JSDOM } from 'jsdom';
import _ from 'lodash';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import supertest from 'supertest';

// States.
import { ApplicationState } from '../src/client/states/index';

const mockStore = configureMockStore([thunk]);
const state = {
    application: ApplicationState
};

/**
 * Creates a JSDOM object.
 * @returns {JSDOM} a mocked DOM object.
 */
export function createDom() {
    let html = '<!DOCTYPE html>';

    html += '<html>';
    html += '<body>';
    html += '</body>';
    html += '</html>';

    return new JSDOM(html);
}

/**
 * Returns props that mocks the router and connected components.
 * @return a mocked props object
 */
export function getDefaultProps() {
    const store = getMockStore(state);

    return {
        dispatch: stub(),
        history: {
            push: stub()
        },
        location: {
            query: {}
        },
        store: store,
        ...state
    };
}

export function getMockStore() {
    return mockStore(state);
}

/**
 * Returns all the routes that have been registered on an Express app.
 * @param app an Express app.
 * @returns {Array} all the routes registered.
 */
export function getRoutes(app) {
    if(!app._router) { // No routes.
        return [];
    }

    return _.chain(app._router.stack)
        .filter(middleware => middleware.route)
        .map(middleware => middleware.route.path)
        .uniq()
        .value();
}

/**
 * Convenience method that returns a a partially
 * implemented supertest request, based on the
 * type of HTTP request method.
 *
 * @param method a HTTP request.
 * @param url the route.
 * @returns a supertest request.
 */
export function requestByMethod(method, url, body = {}) {
    let request = supertest(app);

    switch(method) {
        case 'DELETE':
            request = request
                .delete(url)
                .send(body);

            break;
        case 'GET':
            request = request
                .get(url);

            break;
        case 'PATCH':
            request = request
                .patch(url)
                .send(body);

            break;
        case 'POST':
            request = request
                .post(url)
                .send(body);

            break;
        case 'PUT':
            request = request
                .put(url)
                .send(body);

            break;
        default:
            break;
    }

    return request;
}
