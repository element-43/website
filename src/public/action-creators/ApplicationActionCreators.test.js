// Actions.
import { ApplicationActions } from '../actions/index';

// Action creators.
import * as ApplicationActionCreators from './AppicationActionCreators';

describe('application actions', () => {
    it('should create an action to close the terminal', () => {
        const expectedAction = { type: ApplicationActions.CLOSE_TERMINAL };

        expect(ApplicationActionCreators.closeTerminal()).to.deep.equal(expectedAction);
    });

    it('should create an action to open the terminal', () => {
        const expectedAction = { type: ApplicationActions.OPEN_TERMINAL };

        expect(ApplicationActionCreators.openTerminal()).to.deep.equal(expectedAction);
    });
});
