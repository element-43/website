// Enums.
import { Routes } from '../../enums';

// ====================================================
// Actions.
// ====================================================

export interface ICloseAsteroidsAction {
  type: LayoutActionTypes.CloseAsteroids;
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

export interface ISetBarrelRollingAction {
  state: boolean;
  type: LayoutActionTypes.SetBarrelRolling;
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
  | ISetBarrelRollingAction
  | ISetMenuItemAction
  | ISetTitleAction;

// ====================================================
// Action types.
// ====================================================

export enum LayoutActionTypes {
  CloseAsteroids = '@layout/CLOSE_ASTEROIDS',
  CloseMenu = '@layout/CLOSE_MENU',
  CloseTerminal = '@layout/CLOSE_TERMINAL',
  OpenAsteroids = '@layout/OPEN_ASTEROIDS',
  OpenMenu = '@layout/OPEN_MENU',
  OpenTerminal = '@layout/OPEN_TERMINAL',
  SetBarrelRolling = '@layout/SET_BARREL_ROLLING',
  SetTitle = '@layout/SET_TITLE',
  SetMenuItem = '@layout/SET_MENU_ITEM',
}

// ====================================================
// Types.
// ====================================================

export interface ILayoutState {
  asteroids: IAsteroidsConfig;
  barrelRolling: boolean;
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
  | Routes.About
  | Routes.Contact
  | Routes.Home
  | Routes.Portfolio;

export interface ITerminalConfig {
  open: boolean;
}
