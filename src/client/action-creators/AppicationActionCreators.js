import { ApplicationActions } from '../actions/index';

export const closeMenu = () => ({ type: ApplicationActions.CLOSE_MENU });

export const closeTerminal = () => ({ type: ApplicationActions.CLOSE_TERMINAL });

export const openMenu = () => ({ type: ApplicationActions.OPEN_MENU });

export const openTerminal = () => ({ type: ApplicationActions.OPEN_TERMINAL });
