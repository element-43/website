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

/**
 * Returns props that mocks the router and connected components.
 * @return a mocked props object
 */
export function getDefaultProps() {
    return {
        location: {
            query: {}
        },
        router: {
            push: stub()
        }
    };
}
