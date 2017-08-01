import BaseService from './BaseService';

// Config.
import { defaults } from '../../common/index';

const route = defaults.endpoints.api.base + defaults.endpoints.api.post;

class PostService extends BaseService {
    /**
     * Gets all the posts based on the parameters.
     * @param categories an array of categories.
     * @param limit the number of posts to return.
     * @param skip the number of posts to skip.
     * @return {Promise} containing a list of posts.
     */
    getPosts(categories = [], limit = 10, skip = 0) {
        let url = route + '?skip=' + skip + '&limit=' + limit;

        if(categories.length > 0) {
            url += '&categories' + categories.join(',');
        }

        return this.httpGet(url);
    }
}

export default PostService;
