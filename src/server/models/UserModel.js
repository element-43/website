import keystone from 'keystone';

const Types = keystone.Field.Types;

const UserModel = new keystone.List('User');

UserModel.add({
    name: { type: Types.Name, required: true, index: true },
    email: { type: Types.Email, initial: true, required: true, index: true },
    password: { type: Types.Password, initial: true },
    canAccessKeystone: { type: Boolean, initial: true }
});

UserModel.register();

export default UserModel;
