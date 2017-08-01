import _ from 'lodash';
import cookie from 'react-cookie';

// Config.
import { defaults } from '../../common/index';

// Actions.
import { SessionActions } from '../actions/index';

// States.
import { SessionState as initialState } from '../states/index';

// Module.
import SessionReducer from './SessionReducer';

describe('session reducers', () => {
    const scope = {
        initialState: null,
        cookieSaveStub: null
    };

    beforeEach(() => {
        scope.initialState = _.clone(initialState);

        scope.cookieSaveStub = stub(cookie, 'save');
    });

    afterEach(() => {
        scope.initialState = _.noop();

        scope.cookieSaveStub.restore();
    });

    describe('when checking the initial state', () => {
        it('should return the initial state', () => {
            const state = SessionReducer(scope.initialState, {});

            expect(state).to.deep.equal(scope.initialState);
        });
    });

    describe('when the enabled cookies', () => {
        it('should save the cookies to the browser cookies', () => {
            const state = SessionReducer(scope.initialState, { type: SessionActions.SET_ENABLED_COOKIE });

            assert.calledWith(scope.cookieSaveStub, defaults.cookieKeys.enabled, true);

            expect(state.enabledCookie).to.be.true;
        });
    });
});
