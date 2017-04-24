// API.
import Base from './Base';

// Config.
import defaults from '../../../config/defaults';

export default class Post extends Base {
    constructor(router) {
        super(router);
    }

    registerRoutes() {
        this.router
            .route(defaults.endpoints.api.post)
            .get((request, response) => {
                response.json({
                    author: 'lol1'
                });
            });
    }
}
