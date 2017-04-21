import keystone from 'keystone';

const PostCategory = new keystone.List('PostCategory', {
    map: { name: 'title' },
    defaultSort: '-createdAt'
});

PostCategory.add({
    title: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

PostCategory.register();

export default PostCategory;
