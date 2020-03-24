// Enums.
import { RoutesEnum } from '../../enums/api';

// ====================================================
// Actions.
// ====================================================

export interface ICloseAsteroidsAction {
  type: LayoutActionTypes.CloseAsteriods;
}

export interface ICloseMenuAction {
  type: LayoutActionTypes.CloseMenu;
}

export interface ICloseTerminalAction {
  type: LayoutActionTypes.CloseTerminal;
}

export interface IOpenAsteroidsAction {
  type: LayoutActionTypes.OpenAsteroids;
}

export interface IOpenMenuAction {
  type: LayoutActionTypes.OpenMenu;
}

export interface IOpenTerminalAction {
  type: LayoutActionTypes.OpenTerminal;
}

export interface ISetMenuItemAction {
  route?: MenuRoutes;
  type: LayoutActionTypes.SetMenuItem;
}

export interface ISetTitleAction {
  title: string;
  type: LayoutActionTypes.SetTitle;
}

export type LayoutActions =
  | ICloseAsteroidsAction
  | ICloseMenuAction
  | ICloseTerminalAction
  | IOpenAsteroidsAction
  | IOpenMenuAction
  | IOpenTerminalAction
  | ISetMenuItemAction
  | ISetTitleAction;

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

export interface ILayoutState {
  asteroids: IAsteroidsConfig;
  menu: IMenuConfig;
  terminal: ITerminalConfig;
  title: string;
}

export interface IAsteroidsConfig {
  open: boolean;
}

export interface IMenuConfig {
  items: IMenuItem[];
  open: boolean;
}

export interface IMenuItem {
  active: boolean;
  route: MenuRoutes;
  title: string;
}

export type MenuRoutes =
  | RoutesEnum.About
  | RoutesEnum.Contact
  | RoutesEnum.Home
  | RoutesEnum.Portfolio;

export interface ITerminalConfig {
  open: boolean;
}
