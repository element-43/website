import _ from 'lodash';

import ApplicationReducer from './ApplicationReducer';
import { ApplicationActions } from '../actions/index';
import { ApplicationState as initialState } from '../states/index';

describe('config reducers', () => {
    beforeEach(function() {
        this.initialState = _.clone(initialState);
    });

    afterEach(function() {
        this.initialState = _.noop();
    });

    describe('when checking the initial state', function() {
        it('should return the initial state', function() {
            const state = ApplicationReducer(this.initialState, {});

            expect(state).to.deep.equal(this.initialState);
        });
    });

    describe('when the terminal is open/closed', function() {
        it('should open the terminal if it is closed', function() {
            let state;

            this.initialState.terminal.isOpen = false;

            state = ApplicationReducer(this.initialState, { type: ApplicationActions.OPEN_TERMINAL });

            expect(state.terminal.isOpen).to.be.true;
        });

        it('should close the terminal if it is open', function() {
            let state;

            this.initialState.terminal.isOpen = true;

            state = ApplicationReducer(this.initialState, { type: ApplicationActions.CLOSE_TERMINAL });

            expect(state.terminal.isOpen).to.be.false;
        });
    });
});
