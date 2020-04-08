// Enums.
import { Routes } from '../../enums';

// Strings.
import { Titles } from '../../constants';

// Types.
import { ILayoutState } from './types';

export function getInitialState(): ILayoutState {
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
