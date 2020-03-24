// Enums.
import { RoutesEnum } from '../../enums/api';

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
          route: RoutesEnum.About,
          title: Titles.ABOUT,
        },
        {
          active: false,
          route: RoutesEnum.Portfolio,
          title: Titles.PORTFOLIO,
        },
        {
          active: false,
          route: RoutesEnum.Contact,
          title: Titles.CONTACT,
        },
      ],
      open: false,
    },
    terminal: {
      open: false,
    },
    title: Titles.DEFAULT,
  };
}
