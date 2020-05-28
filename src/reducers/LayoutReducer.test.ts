// Enums.
import { LayoutActionTypes, Routes } from '../enums';

// Reducer.
import reducer, { getInitialState } from './LayoutReducer';

// Types.
import {
  CloseAsteroidsAction,
  CloseMenuAction,
  CloseTerminalAction,
  LayoutState,
  OpenAsteroidsAction,
  OpenMenuAction,
  OpenTerminalAction,
  SetMenuItemAction,
} from '../types';

interface IScope {
  initialState: LayoutState;
}

describe('reducers/LayoutReducer', () => {
  let scope: IScope;

  beforeEach(() => {
    scope = {
      initialState: getInitialState(),
    };
  });

  it('should close the asteroids game', () => {
    const action: CloseAsteroidsAction = {
      type: LayoutActionTypes.CloseAsteroids,
    };

    scope.initialState.asteroids.open = true;

    expect(reducer(scope.initialState, action).asteroids.open).toBe(false);
  });

  it('should close the menu', () => {
    const action: CloseMenuAction = {
      type: LayoutActionTypes.CloseMenu,
    };

    scope.initialState.menu.open = true;

    expect(reducer(scope.initialState, action).menu.open).toBe(false);
  });

  it('should close the terminal', () => {
    const action: CloseTerminalAction = {
      type: LayoutActionTypes.CloseTerminal,
    };

    scope.initialState.terminal.open = true;

    expect(reducer(scope.initialState, action).terminal.open).toBe(false);
  });

  it('should open the asteroids game', () => {
    const action: OpenAsteroidsAction = {
      type: LayoutActionTypes.OpenAsteroids,
    };

    scope.initialState.asteroids.open = false;

    expect(reducer(scope.initialState, action).asteroids.open).toBe(true);
  });

  it('should open the menu', () => {
    const action: OpenMenuAction = {
      type: LayoutActionTypes.OpenMenu,
    };

    scope.initialState.menu.open = false;

    expect(reducer(scope.initialState, action).menu.open).toBe(true);
  });

  it('should open the terminal', () => {
    const action: OpenTerminalAction = {
      type: LayoutActionTypes.OpenTerminal,
    };

    scope.initialState.terminal.open = false;

    expect(reducer(scope.initialState, action).terminal.open).toBe(true);
  });

  describe('LayoutActionTypes.SetMenuItem', () => {
    it('should set the menu item to active if the route exists', () => {
      const action: SetMenuItemAction = {
        route: Routes.About,
        type: LayoutActionTypes.SetMenuItem,
      };
      const state: LayoutState = reducer(scope.initialState, action);

      state.menu.items.forEach((value) => {
        if (value.route === Routes.About) {
          expect(value.active).toBe(true);
        }
      });
    });

    it('should not set any items', () => {
      const action: SetMenuItemAction = {
        type: LayoutActionTypes.SetMenuItem,
      };
      const state: LayoutState = reducer(scope.initialState, action);

      expect(state.menu.items).toEqual(scope.initialState.menu.items);
    });
  });
});
