import keystone from 'keystone';

const User = keystone.list('User');

module.exports = done => {
    new User.model({
        name: { first: 'Kieran', last: 'O\'Neill' },
        email: 'kieran.oneill@element43.xyz',
        password: 'admin',
        canAccessKeystone: true
    })
    .save(done);
};
