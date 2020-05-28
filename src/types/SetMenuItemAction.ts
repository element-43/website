import { LayoutActionTypes } from '../enums';

// Types.
import MenuRoutes from './MenuRoutes';

interface SetMenuItemAction {
  route?: MenuRoutes;
  type: LayoutActionTypes.SetMenuItem;
}

export default SetMenuItemAction;
