import { ActionCreator } from 'redux';

// Types.
import {
  ICloseAsteroidsAction,
  ICloseMenuAction,
  ICloseTerminalAction,
  IOpenAsteroidsAction,
  IOpenMenuAction,
  IOpenTerminalAction,
  ISetMenuItemAction,
  ISetTitleAction,
  LayoutActionTypes,
  MenuRoutes,
} from './types';

export const closeAsteroids: ActionCreator<ICloseAsteroidsAction> = () => ({
  type: LayoutActionTypes.CloseAsteriods,
});

export const closeMenu: ActionCreator<ICloseMenuAction> = () => ({
  type: LayoutActionTypes.CloseMenu,
});

export const closeTerminal: ActionCreator<ICloseTerminalAction> = () => ({
  type: LayoutActionTypes.CloseTerminal,
});

export const openAsteroids: ActionCreator<IOpenAsteroidsAction> = () => ({
  type: LayoutActionTypes.OpenAsteroids,
});

export const openMenu: ActionCreator<IOpenMenuAction> = () => ({
  type: LayoutActionTypes.OpenMenu,
});

export const openTerminal: ActionCreator<IOpenTerminalAction> = () => ({
  type: LayoutActionTypes.OpenTerminal,
});

export const setMenuItem: ActionCreator<ISetMenuItemAction> = (
  route?: MenuRoutes
) => ({
  route,
  type: LayoutActionTypes.SetMenuItem,
});

export const setTitle: ActionCreator<ISetTitleAction> = (title: string) => ({
  title,
  type: LayoutActionTypes.SetTitle,
});
