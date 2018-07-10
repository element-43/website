import { Action } from 'redux';

//====================================================
// States.
//====================================================

export interface LayoutState {
    asteroids: AsteroidsConfig;
    header: HeaderConfig;
    terminal: TerminalConfig;
}

export interface AsteroidsConfig {
    isOpen: boolean;
}

export interface HeaderConfig {
    isMenuOpen: boolean;
}

export interface TerminalConfig {
    isOpen: boolean;
}

//====================================================
// Action types.
//====================================================

export enum LayoutActionTypes {
    CloseAsteriods = '@layout/CLOSE_ASTEROIDS',
    CloseMenu = '@layout/CLOSE_MENU',
    CloseTerminal = '@layout/CLOSE_TERMINAL',
    OpenAsteroids = '@layout/OPEN_ASTEROIDS',
    OpenMenu = '@layout/OPEN_MENU',
    OpenTerminal = '@layout/OPEN_TERMINAL',
}

//====================================================
// Actions.
//====================================================

export interface CloseAsteroidsAction extends Action {
    type: LayoutActionTypes.CloseAsteriods;
}

export interface CloseMenuAction extends Action {
    type: LayoutActionTypes.CloseMenu;
}

export interface CloseTerminalAction extends Action {
    type: LayoutActionTypes.CloseTerminal;
}

export interface OpenAsteroidsAction extends Action {
    type: LayoutActionTypes.OpenAsteroids;
}

export interface OpenMenuAction extends Action {
    type: LayoutActionTypes.OpenMenu;
}

export interface OpenTerminalAction extends Action {
    type: LayoutActionTypes.OpenTerminal;
}

export type LayoutActions = CloseAsteroidsAction
    | CloseMenuAction
    | CloseTerminalAction
    | OpenAsteroidsAction
    | OpenMenuAction
    | OpenTerminalAction;
