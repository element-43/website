// API.
import Base from './Base';

// Config.
import defaults from '../../../config/defaults';

export default class PostCategory extends Base {
    constructor(router) {
        super(router);
    }

    registerRoutes() {
        this.router
            .route(defaults.endpoints.postCategory)
            .get((request, response) => {
                response.json({
                    name: 'lol2'
                });
            });
    }
}
