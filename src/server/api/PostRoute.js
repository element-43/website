// Config.
import defaults from '../../common/defaults';

// Router.
import Router from './Router';

export default class PostRoute extends Router {
    get routes() {
        return {
            [`GET ${defaults.endpoints.api.post}`]: 'getPost'
        };
    }

    getPost(request, response) {
        response.json({ author: 'lol1' });
    }
}
