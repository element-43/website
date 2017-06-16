import PostCategoryService from './PostCategoryService';
import PostService from './PostService';

export default function createServices() {
    return {
        post: new PostService(),
        postCategory: new PostCategoryService()
    };
}
