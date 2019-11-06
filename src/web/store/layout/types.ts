// Enums.
import { RoutesEnum } from '../../../common/enums';

// ====================================================
// Actions.
// ====================================================

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

export interface SetMenuItemAction {
  route?: MenuRoutes;
  type: LayoutActionTypes.SetMenuItem;
}

export interface SetTitleAction {
  title: string;
  type: LayoutActionTypes.SetTitle;
}

export type LayoutActions =
  | CloseAsteroidsAction
  | CloseMenuAction
  | CloseTerminalAction
  | OpenAsteroidsAction
  | OpenMenuAction
  | OpenTerminalAction
  | SetMenuItemAction
  | SetTitleAction;

// ====================================================
// Action types.
// ====================================================

export enum LayoutActionTypes {
  CloseAsteriods = '@layout/CLOSE_ASTEROIDS',
  CloseMenu = '@layout/CLOSE_MENU',
  CloseTerminal = '@layout/CLOSE_TERMINAL',
  OpenAsteroids = '@layout/OPEN_ASTEROIDS',
  OpenMenu = '@layout/OPEN_MENU',
  OpenTerminal = '@layout/OPEN_TERMINAL',
  SetTitle = '@layout/SET_TITLE',
  SetMenuItem = '@layout/SET_MENU_ITEM',
}

// ====================================================
// Types.
// ====================================================

export interface LayoutState {
  asteroids: AsteroidsConfig;
  menu: MenuConfig;
  terminal: TerminalConfig;
  title: string;
}

export interface AsteroidsConfig {
  open: boolean;
}

export interface MenuConfig {
  items: MenuItem[];
  open: boolean;
}

export interface MenuItem {
  active: boolean;
  route: MenuRoutes;
  title: string;
}

export type MenuRoutes =
  | RoutesEnum.About
  | RoutesEnum.Contact
  | RoutesEnum.Home
  | RoutesEnum.Portfolio;

export interface TerminalConfig {
  open: boolean;
}
