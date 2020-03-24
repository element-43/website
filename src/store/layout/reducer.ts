import { Reducer } from 'redux';

// Types.
import {
  IAsteroidsConfig,
  ILayoutState,
  IMenuConfig,
  IMenuItem,
  ITerminalConfig,
  LayoutActions,
  LayoutActionTypes,
} from './types';

// Utils.
import { getInitialState } from './utils';

const reducer: Reducer<ILayoutState, LayoutActions> = (
  state: ILayoutState = getInitialState(),
  action: LayoutActions
) => {
  let asteroids: IAsteroidsConfig;
  let menu: IMenuConfig;
  let terminal: ITerminalConfig;

  switch (action.type) {
    case LayoutActionTypes.CloseAsteriods:
      asteroids = state.asteroids;

      asteroids.open = false;

      return {
        ...state,
        asteroids,
      };
    case LayoutActionTypes.CloseMenu:
      menu = state.menu;

      menu.open = false;

      return {
        ...state,
        menu,
      };
    case LayoutActionTypes.CloseTerminal:
      terminal = state.terminal;

      terminal.open = false;

      return {
        ...state,
        terminal,
      };
    case LayoutActionTypes.OpenAsteroids:
      asteroids = state.asteroids;

      asteroids.open = true;

      return {
        ...state,
        asteroids,
      };
    case LayoutActionTypes.OpenMenu:
      menu = state.menu;

      menu.open = true;

      return {
        ...state,
        menu,
      };
    case LayoutActionTypes.OpenTerminal:
      terminal = state.terminal;

      terminal.open = true;

      return {
        ...state,
        terminal,
      };
    case LayoutActionTypes.SetMenuItem:
      menu = state.menu;

      menu.items.map((value: IMenuItem) => ({
        ...value,
        active: value.route === action.route,
      }));

      return {
        ...state,
        menu,
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
