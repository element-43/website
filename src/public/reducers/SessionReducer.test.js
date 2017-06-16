import _ from 'lodash';
import cookie from 'react-cookie';

// Config.
import defaults from '../../../config/defaults';

// Actions.
import { SessionActions } from '../actions/index';

// States.
import { SessionState as initialState } from '../states/index';

// Module.
import SessionReducer from './SessionReducer';

describe('config reducers', () => {
    beforeEach(function() {
        this.initialState = _.clone(initialState);

        this.cookieSaveStub = stub(cookie, 'save');
    });

    afterEach(function() {
        this.initialState = _.noop();

        this.cookieSaveStub.restore();
    });

    describe('when checking the initial state', function() {
        it('should return the initial state', function() {
            const state = SessionReducer(this.initialState, {});

            expect(state).to.deep.equal(this.initialState);
        });
    });

    describe('when the enabled cookies', function() {
        it('should save the cookies to the browser cookies', function() {
            const state = SessionReducer(this.initialState, { type: SessionActions.SET_ENABLED_COOKIE });

            assert.calledWith(this.cookieSaveStub, defaults.cookieKeys.enabled, true);
            expect(state.enabledCookie).to.be.true;
        });
    });
});
