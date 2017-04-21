import keystone from 'keystone';

const Types = keystone.Field.Types;

const Post = new keystone.List('Post', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
    defaultSort: '-createdAt'
});

Post.add({
    title: { type: String, required: true },
    state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
    author: { type: Types.Relationship, ref: 'User' },
    categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
    content: { type: Types.Markdown, height: 200 },
    createdAt: { type: Date, default: Date.now },
    publishedAt: Date
});

Post.defaultColumns = 'title, state|15%, author, publishedAt|15%';
Post.register();

export default Post;
