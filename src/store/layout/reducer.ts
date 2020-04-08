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
          items: state.menu.items.map((value: IMenuItem) => ({
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
