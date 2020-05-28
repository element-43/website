// Enums.
import { LayoutActionTypes } from '../enums';

// Types.
import {
  CloseAsteroidsAction,
  CloseMenuAction,
  CloseTerminalAction,
  MenuRoutes,
  OpenAsteroidsAction,
  OpenMenuAction,
  OpenTerminalAction,
  SetBarrelRollingAction,
  SetMenuItemAction,
  SetTitleAction,
} from '../types';

export function closeAsteroidsAction(): CloseAsteroidsAction {
  return {
    type: LayoutActionTypes.CloseAsteroids,
  };
}

export function closeMenuAction(): CloseMenuAction {
  return {
    type: LayoutActionTypes.CloseMenu,
  };
}

export function closeTerminalAction(): CloseTerminalAction {
  return {
    type: LayoutActionTypes.CloseTerminal,
  };
}

export function openAsteroidsAction(): OpenAsteroidsAction {
  return {
    type: LayoutActionTypes.OpenAsteroids,
  };
}

export function openMenuAction(): OpenMenuAction {
  return {
    type: LayoutActionTypes.OpenMenu,
  };
}

export function openTerminalAction(): OpenTerminalAction {
  return {
    type: LayoutActionTypes.OpenTerminal,
  };
}

export function setBarrelRollingAction(state: boolean): SetBarrelRollingAction {
  return {
    state,
    type: LayoutActionTypes.SetBarrelRolling,
  };
}

export function setMenuItemAction(route?: MenuRoutes): SetMenuItemAction {
  return {
    route,
    type: LayoutActionTypes.SetMenuItem,
  };
}

export function setTitleAction(title: string): SetTitleAction {
  return {
    title,
    type: LayoutActionTypes.SetTitle,
  };
}
