//====================================================
// Actions.
//====================================================

export interface CloseAsteroidsAction {
  type: LayoutActionTypes.CloseAsteriods;
}

export interface CloseMenuAction {
  type: LayoutActionTypes.CloseMenu;
}

export interface CloseTerminalAction {
  type: LayoutActionTypes.CloseTerminal;
}

export interface OpenAsteroidsAction {
  type: LayoutActionTypes.OpenAsteroids;
}

export interface OpenMenuAction {
  type: LayoutActionTypes.OpenMenu;
}

export interface OpenTerminalAction {
  type: LayoutActionTypes.OpenTerminal;
}

export type LayoutActions =
  | CloseAsteroidsAction
  | CloseMenuAction
  | CloseTerminalAction
  | OpenAsteroidsAction
  | OpenMenuAction
  | OpenTerminalAction;

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
