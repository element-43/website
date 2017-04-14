import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// States.
import { ApplicationState, SessionState } from '../src/public/states/index';

const mockStore = configureMockStore([thunk]);
const state = {
    application: ApplicationState,
    session: SessionState
};

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
 * Convenience method that returns a a partially
 * implemented supertest request, based on the
 * type of HTTP request method.
 *
 * @param method a HTTP request.
 * @param url the route.
 * @returns a supertest request.
 */
export function requestByMethod(method, url, body = {}) {
    let request = supertest(server.app);

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
