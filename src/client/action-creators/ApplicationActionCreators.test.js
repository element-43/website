// Actions.
import { ApplicationActions } from '../actions/index';

// Action creators.
import { closeMenu, closeTerminal, openMenu, openTerminal } from './AppicationActionCreators';

describe('application actions', () => {
    it('should create an action to close the menu', () => {
        const expectedAction = { type: ApplicationActions.CLOSE_MENU };

        expect(closeMenu()).to.deep.equal(expectedAction);
    });

    it('should create an action to close the terminal', () => {
        const expectedAction = { type: ApplicationActions.CLOSE_TERMINAL };

        expect(closeTerminal()).to.deep.equal(expectedAction);
    });

    it('should create an action to open the menu', () => {
        const expectedAction = { type: ApplicationActions.OPEN_MENU };

        expect(openMenu()).to.deep.equal(expectedAction);
    });

    it('should create an action to open the terminal', () => {
        const expectedAction = { type: ApplicationActions.OPEN_TERMINAL };

        expect(openTerminal()).to.deep.equal(expectedAction);
    });
});
