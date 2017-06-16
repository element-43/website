import BaseService from './BaseService';

// Config.
import defaults from '../../../config/defaults';

const route = defaults.endpoints.api.base + defaults.endpoints.api.postCategory;

class PostCategoryService extends BaseService {
    /**
     * Gets all the post categories.
     * @return {Promise} a promise containing a list of post categories.
     */
    getPostCategories() {
        return this.httpGet(route);
    }
}

export default PostCategoryService;
