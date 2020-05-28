import { Reducer } from 'redux';

// Enums.
import { LayoutActionTypes, Routes } from '../enums';

// Constants.
import { Titles } from '../constants';

// Types.
import {
  CloseAsteroidsAction,
  CloseMenuAction,
  CloseTerminalAction,
  LayoutState,
  OpenAsteroidsAction,
  OpenMenuAction,
  OpenTerminalAction,
  SetBarrelRollingAction,
  SetMenuItemAction,
  SetTitleAction,
} from '../types';

type Actions =
  | CloseAsteroidsAction
  | CloseMenuAction
  | CloseTerminalAction
  | OpenAsteroidsAction
  | OpenMenuAction
  | OpenTerminalAction
  | SetBarrelRollingAction
  | SetMenuItemAction
  | SetTitleAction;

export function getInitialState(): LayoutState {
  return {
    asteroids: {
      open: false,
    },
    menu: {
      items: [
        {
          active: false,
          route: Routes.About,
          title: Titles.ABOUT,
        },
        {
          active: false,
          route: Routes.Portfolio,
          title: Titles.PORTFOLIO,
        },
        {
          active: false,
          route: Routes.Contact,
          title: Titles.CONTACT,
        },
      ],
      open: false,
    },
    barrelRolling: false,
    terminal: {
      open: false,
    },
    title: Titles.DEFAULT,
  };
}

const reducer: Reducer<LayoutState, Actions> = (
  state: LayoutState = getInitialState(),
  action: Actions
) => {
  switch (action.type) {
    case LayoutActionTypes.CloseAsteroids:
      return {
        ...state,
        asteroids: {
          ...state.asteroids,
          open: false,
        },
      };
    case LayoutActionTypes.CloseMenu:
      return {
        ...state,
        menu: {
          ...state.menu,
          open: false,
        },
      };
    case LayoutActionTypes.CloseTerminal:
      return {
        ...state,
        terminal: {
          ...state.terminal,
          open: false,
        },
      };
    case LayoutActionTypes.OpenAsteroids:
      return {
        ...state,
        asteroids: {
          ...state.asteroids,
          open: true,
        },
      };
    case LayoutActionTypes.OpenMenu:
      return {
        ...state,
        menu: {
          ...state.menu,
          open: true,
        },
      };
    case LayoutActionTypes.OpenTerminal:
      return {
        ...state,
        terminal: {
          ...state.terminal,
          open: true,
        },
      };
    case LayoutActionTypes.SetBarrelRolling:
      return {
        ...state,
        barrelRolling: !state.barrelRolling,
      };
    case LayoutActionTypes.SetMenuItem:
      return {
        ...state,
        menu: {
          ...state.menu,
          items: state.menu.items.map((value) => ({
            ...value,
            active: value.route === action.route,
          })),
        },
      };
    case LayoutActionTypes.SetTitle:
      return {
        ...state,
        title: action.title,
      };
    default:
      return state;
  }
};

export default reducer;
