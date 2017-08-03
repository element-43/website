import _ from 'lodash';

// Actions.
import { ApplicationActions } from '../actions/index';

// States.
import { ApplicationState as initialState } from '../states/index';

// Module.
import ApplicationReducer from './ApplicationReducer';

describe('application reducers', () => {
    const scope = {
        initialState: null
    };

    beforeEach(() => {
        scope.initialState = _.clone(initialState);
    });

    afterEach(() => {
        scope.initialState = _.noop();
    });

    context('initial state', () => {
        it('should return the initial state', () => {
            const state = ApplicationReducer(scope.initialState, {});

            expect(state).to.deep.equal(scope.initialState);
        });
    });

    context('opening/closing the menu', () => {
        it('should open the menu if it is closed', () => {
            let state;

            scope.initialState.header.isMenuOpen = false;

            state = ApplicationReducer(scope.initialState, { type: ApplicationActions.OPEN_MENU });

            expect(state.header.isMenuOpen).to.be.true;
        });

        it('should close the menu if it is open', () => {
            let state;

            scope.initialState.header.isMenuOpen = true;

            state = ApplicationReducer(scope.initialState, { type: ApplicationActions.CLOSE_MENU });

            expect(state.header.isMenuOpen).to.be.false;
        });
    });

    context('opening/closing the terminal', () => {
        it('should open the terminal if it is closed', () => {
            let state;

            scope.initialState.terminal.isOpen = false;

            state = ApplicationReducer(scope.initialState, { type: ApplicationActions.OPEN_TERMINAL });

            expect(state.terminal.isOpen).to.be.true;
        });

        it('should close the terminal if it is open', () => {
            let state;

            scope.initialState.terminal.isOpen = true;

            state = ApplicationReducer(scope.initialState, { type: ApplicationActions.CLOSE_TERMINAL });

            expect(state.terminal.isOpen).to.be.false;
        });
    });
});
