// Enums.
import { RoutesEnum } from '../../enums';

// Reducer.
import reducer from './reducer';

// Types.
import {
  ICloseAsteroidsAction,
  ICloseMenuAction,
  ICloseTerminalAction,
  ILayoutState,
  IMenuItem,
  IOpenAsteroidsAction,
  IOpenMenuAction,
  IOpenTerminalAction,
  ISetMenuItemAction,
  LayoutActionTypes,
} from './types';

// Utils.
import { getInitialState } from './utils';

interface IScope {
  initialState: ILayoutState;
}

describe('store/layout/reducer', () => {
  let scope: IScope;

  beforeEach(() => {
    scope = {
      initialState: getInitialState(),
    };
  });

  it('should close the asteroids game', () => {
    const action: ICloseAsteroidsAction = {
      type: LayoutActionTypes.CloseAsteriods,
    };

    scope.initialState.asteroids.open = true;

    expect(reducer(scope.initialState, action).asteroids.open).toBe(false);
  });

  it('should close the menu', () => {
    const action: ICloseMenuAction = {
      type: LayoutActionTypes.CloseMenu,
    };

    scope.initialState.menu.open = true;

    expect(reducer(scope.initialState, action).menu.open).toBe(false);
  });

  it('should close the terminal', () => {
    const action: ICloseTerminalAction = {
      type: LayoutActionTypes.CloseTerminal,
    };

    scope.initialState.terminal.open = true;

    expect(reducer(scope.initialState, action).terminal.open).toBe(false);
  });

  it('should open the asteroids game', () => {
    const action: IOpenAsteroidsAction = {
      type: LayoutActionTypes.OpenAsteroids,
    };

    scope.initialState.asteroids.open = false;

    expect(reducer(scope.initialState, action).asteroids.open).toBe(true);
  });

  it('should open the menu', () => {
    const action: IOpenMenuAction = {
      type: LayoutActionTypes.OpenMenu,
    };

    scope.initialState.menu.open = false;

    expect(reducer(scope.initialState, action).menu.open).toBe(true);
  });

  it('should open the terminal', () => {
    const action: IOpenTerminalAction = {
      type: LayoutActionTypes.OpenTerminal,
    };

    scope.initialState.terminal.open = false;

    expect(reducer(scope.initialState, action).terminal.open).toBe(true);
  });

  describe('LayoutActionTypes.SetMenuItem', () => {
    it('should set the menu item to active if the route exists', () => {
      const action: ISetMenuItemAction = {
        route: RoutesEnum.About,
        type: LayoutActionTypes.SetMenuItem,
      };
      const state: ILayoutState = reducer(scope.initialState, action);

      expect(
        state.menu.items.find(
          (value: IMenuItem) => value.route === RoutesEnum.About
        ).active
      ).toBe(true);
    });

    it('should not set any items', () => {
      const action: ISetMenuItemAction = {
        type: LayoutActionTypes.SetMenuItem,
      };
      const state: ILayoutState = reducer(scope.initialState, action);

      expect(state.menu.items).toEqual(scope.initialState.menu.items);
    });
  });
});
