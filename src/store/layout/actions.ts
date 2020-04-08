// Types.
import {
  ICloseAsteroidsAction,
  ICloseMenuAction,
  ICloseTerminalAction,
  IOpenAsteroidsAction,
  IOpenMenuAction,
  IOpenTerminalAction,
  ISetBarrelRollingAction,
  ISetMenuItemAction,
  ISetTitleAction,
  LayoutActionTypes,
  MenuRoutes,
} from './types';

export function closeAsteroidsAction(): ICloseAsteroidsAction {
  return {
    type: LayoutActionTypes.CloseAsteroids,
  };
}

export function closeMenuAction(): ICloseMenuAction {
  return {
    type: LayoutActionTypes.CloseMenu,
  };
}

export function closeTerminalAction(): ICloseTerminalAction {
  return {
    type: LayoutActionTypes.CloseTerminal,
  };
}

export function openAsteroidsAction(): IOpenAsteroidsAction {
  return {
    type: LayoutActionTypes.OpenAsteroids,
  };
}

export function openMenuAction(): IOpenMenuAction {
  return {
    type: LayoutActionTypes.OpenMenu,
  };
}

export function openTerminalAction(): IOpenTerminalAction {
  return {
    type: LayoutActionTypes.OpenTerminal,
  };
}

export function setBarrelRollingAction(
  state: boolean
): ISetBarrelRollingAction {
  return {
    state,
    type: LayoutActionTypes.SetBarrelRolling,
  };
}

export function setMenuItemAction(route?: MenuRoutes): ISetMenuItemAction {
  return {
    route,
    type: LayoutActionTypes.SetMenuItem,
  };
}

export function setTitleAction(title: string): ISetTitleAction {
  return {
    title,
    type: LayoutActionTypes.SetTitle,
  };
}
