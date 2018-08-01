// Types.
import { LayoutActionTypes } from './types';

// Action creators.
import {
    closeAsteroids,
    closeMenu,
    closeTerminal,
    openAsteroids,
    openMenu,
    openTerminal
} from './actionsCreators';

describe('store/layout/actionCreators', () => {
    describe('closeAsteroids()', () => {
        it('should create an action to close the asteroids game', () => {
            expect(closeAsteroids()).toEqual({ type: LayoutActionTypes.CloseAsteriods });
        });
    });

    describe('closeMenu()', () => {
        it('should create an action to close the menu', () => {
            expect(closeMenu()).toEqual({ type: LayoutActionTypes.CloseMenu });
        });
    });

    describe('closeTerminal()', () => {
        it('should create an action to close the terminal', () => {
            expect(closeTerminal()).toEqual({ type: LayoutActionTypes.CloseTerminal });
        });
    });

    describe('openAsteroids()', () => {
        it('should create an action to open the asteroids game', () => {
            expect(openAsteroids()).toEqual({ type: LayoutActionTypes.OpenAsteroids });
        });
    });

    describe('openMenu()', () => {
        it('should create an action to open the menu', () => {
            expect(openMenu()).toEqual({ type: LayoutActionTypes.OpenMenu });
        });
    });

    describe('openTerminal()', () => {
        it('should create an action to open the terminal', () => {
            expect(openTerminal()).toEqual({ type: LayoutActionTypes.OpenTerminal });
        });
    });
});
