import _ from 'lodash';

// Routes.
import Post from './Post';
import PostCategory from './PostCategory';

export default function createRoutes(express) {
    const router = express.Router();

    // Register routes.
    _.each([
        new Post(router),
        new PostCategory(router)
    ], element => element.registerRoutes());

    return router;
}
