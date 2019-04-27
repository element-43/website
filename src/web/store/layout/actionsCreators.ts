import { ActionCreator } from 'redux';

// Types.
import {
  CloseAsteroidsAction,
  CloseMenuAction,
  CloseTerminalAction,
  LayoutActionTypes,
  OpenAsteroidsAction,
  OpenMenuAction,
  OpenTerminalAction,
} from './types';

export const closeAsteroids: ActionCreator<CloseAsteroidsAction> = () => ({
  type: LayoutActionTypes.CloseAsteriods,
});

export const closeMenu: ActionCreator<CloseMenuAction> = () => ({
  type: LayoutActionTypes.CloseMenu,
});

export const closeTerminal: ActionCreator<CloseTerminalAction> = () => ({
  type: LayoutActionTypes.CloseTerminal,
});

export const openAsteroids: ActionCreator<OpenAsteroidsAction> = () => ({
  type: LayoutActionTypes.OpenAsteroids,
});

export const openMenu: ActionCreator<OpenMenuAction> = () => ({
  type: LayoutActionTypes.OpenMenu,
});

export const openTerminal: ActionCreator<OpenTerminalAction> = () => ({
  type: LayoutActionTypes.OpenTerminal,
});
