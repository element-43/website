import { Reducer } from 'redux';

// Types.
import {
    AsteroidsConfig,
    HeaderConfig, 
    LayoutActionTypes, 
    LayoutState, 
    LayoutActions,
    TerminalConfig
} from './types';

const initialState: LayoutState = {
    asteroids: {
        isOpen: false,
    },
    header: {
        isMenuOpen: false,
    },
    terminal: {
        isOpen: false,
    },
};

const reducer: Reducer<LayoutState, LayoutActions> = (state: LayoutState = initialState, action: LayoutActions) => {
    let asteroids: AsteroidsConfig;
    let header: HeaderConfig;
    let terminal: TerminalConfig;

    switch (action.type) {
        case LayoutActionTypes.CloseAsteriods:
            asteroids = initialState.asteroids;

            asteroids.isOpen = false;

            return {
                ...state,
                asteroids,
            };
        case LayoutActionTypes.CloseMenu:
            header = initialState.header;

            header.isMenuOpen = false;

            return {
                ...state,
                header,
            };
        case LayoutActionTypes.CloseTerminal:
            terminal = initialState.terminal;

            terminal.isOpen = false;

            return {
                ...state,
                terminal,
            };
        case LayoutActionTypes.OpenAsteroids:
            asteroids = initialState.asteroids;

            asteroids.isOpen = true;

            return {
                ...state,
                asteroids,
            };
        case LayoutActionTypes.OpenMenu:
            header = initialState.header;

            header.isMenuOpen = true;

            return {
                ...state,
                header,
            };
        case LayoutActionTypes.OpenTerminal:
            terminal = initialState.terminal;

            terminal.isOpen = true;

            return {
                ...state,
                terminal,
            };
        default:
            return state;
    }
};

export default reducer;
