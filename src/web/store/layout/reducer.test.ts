// Types.
import {
    CloseAsteroidsAction,
    CloseMenuAction,
    CloseTerminalAction,
    LayoutActionTypes,
    LayoutState,
    OpenAsteroidsAction,
    OpenMenuAction,
    OpenTerminalAction
} from './types';

// Reducer.
import reducer from './reducer';

interface Scope {
    initialState: LayoutState;
}

describe('store/layout/reducer', () => {
    let scope: Scope;

    beforeEach(() => {
        scope = {
            initialState: {
                asteroids: {
                    isOpen: false,
                },
                header: {
                    isMenuOpen: false,
                },
                terminal: {
                    isOpen: false,
                },
            },
        };
    });

    it('should close the asteroids game', () => {
        const action: CloseAsteroidsAction = {
            type: LayoutActionTypes.CloseAsteriods,
        };

        scope.initialState.asteroids.isOpen = true;

        expect(reducer(scope.initialState, action).asteroids.isOpen).toBe(false);
    });

    it('should close the menu', () => {
        const action: CloseMenuAction = {
            type: LayoutActionTypes.CloseMenu,
        };

        scope.initialState.header.isMenuOpen = true;

        expect(reducer(scope.initialState, action).header.isMenuOpen).toBe(false);
    });

    it('should close the terminal', () => {
        const action: CloseTerminalAction = {
            type: LayoutActionTypes.CloseTerminal,
        };

        scope.initialState.terminal.isOpen = true;

        expect(reducer(scope.initialState, action).terminal.isOpen).toBe(false);
    });

    it('should open the asteroids game', () => {
        const action: OpenAsteroidsAction = {
            type: LayoutActionTypes.OpenAsteroids,
        };

        scope.initialState.asteroids.isOpen = false;

        expect(reducer(scope.initialState, action).asteroids.isOpen).toBe(true);
    });

    it('should open the menu', () => {
        const action: OpenMenuAction = {
            type: LayoutActionTypes.OpenMenu,
        };

        scope.initialState.header.isMenuOpen = false;

        expect(reducer(scope.initialState, action).header.isMenuOpen).toBe(true);
    });

    it('should open the terminal', () => {
        const action: OpenTerminalAction = {
            type: LayoutActionTypes.OpenTerminal,
        };

        scope.initialState.terminal.isOpen = false;

        expect(reducer(scope.initialState, action).terminal.isOpen).toBe(true);
    });
});

