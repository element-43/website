import _ from 'lodash';

// Actions.
import { SessionActions } from '../actions/index';

// States.
import { SessionState as initialState } from '../states/index';

// Module.
import SessionReducer from './SessionReducer';

describe('session reducers', () => {
    const scope = {
        initialState: null
    };

    beforeEach(() => {
        scope.initialState = _.clone(initialState);
    });

    afterEach(() => {
        scope.initialState = _.noop();
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

            expect(state.enabledCookie).to.be.true;
        });
    });
});
