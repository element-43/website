// Actions.
import { ApplicationActions } from '../actions/index';

// Action creators.
import * as ApplicationActionCreators from './AppicationActionCreators';

describe('application actions', () => {
    it('should create an action to toggle the terminal', () => {
        const expectedAction = { type: ApplicationActions.TOGGLE_TERMINAL };

        expect(ApplicationActionCreators.toggleTerminal()).to.deep.equal(expectedAction);
    });
});
