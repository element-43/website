// Action creators.
import * as SessionActionCreators from './SessionActionCreators';

// Actions.
import { SessionActions } from '../actions/index';

describe('session actions', () => {
    it('should create an action to set the enabled cookie', () => {
        const expectedAction = { type: SessionActions.SET_ENABLED_COOKIE };

        expect(SessionActionCreators.setEnabledCookie()).to.deep.equal(expectedAction);
    });
});
