// Enums.
import { RoutesEnum } from '../../../common/enums';

// Strings.
import { Titles } from '../../../common/strings';

// Types.
import { LayoutState } from './types';

export function getInitialState(): LayoutState {
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
