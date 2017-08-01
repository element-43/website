// Action creators.
import { setEnabledCookie } from './SessionActionCreators';

// Actions.
import { SessionActions } from '../actions/index';

describe('session actions', () => {
    it('should create an action to set the enabled cookie', () => {
        const expectedAction = { type: SessionActions.SET_ENABLED_COOKIE };

        expect(setEnabledCookie()).to.deep.equal(expectedAction);
    });
});
