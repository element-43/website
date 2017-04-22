import keystone from 'keystone';

const PostCategoryModel = new keystone.List('PostCategory', {
    map: { name: 'title' },
    defaultSort: '-createdAt'
});

PostCategoryModel.add({
    title: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

PostCategoryModel.register();

export default PostCategoryModel;
