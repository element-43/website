// Enums.
import { RoutesEnum } from '../../../common/enums';

// Reducer.
import reducer from './reducer';

// Types.
import {
  CloseAsteroidsAction,
  CloseMenuAction,
  CloseTerminalAction,
  LayoutActionTypes,
  LayoutState,
  MenuItem,
  OpenAsteroidsAction,
  OpenMenuAction,
  OpenTerminalAction,
  SetMenuItemAction,
} from './types';

// Utils.
import { getInitialState } from './utils';

interface Scope {
  initialState: LayoutState;
}

describe('store/layout/reducer', () => {
  let scope: Scope;

  beforeEach(() => {
    scope = {
      initialState: getInitialState(),
    };
  });

  it('should close the asteroids game', () => {
    const action: CloseAsteroidsAction = {
      type: LayoutActionTypes.CloseAsteriods,
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
        route: RoutesEnum.About,
        type: LayoutActionTypes.SetMenuItem,
      };
      const state: LayoutState = reducer(scope.initialState, action);

      expect(
        state.menu.items.find(
          (value: MenuItem) => value.route === RoutesEnum.About
        ).active
      ).toBe(true);
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
