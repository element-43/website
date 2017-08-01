import PostService from './PostService';

export default function createServices() {
    return {
        post: new PostService()
    };
}
