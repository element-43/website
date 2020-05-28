// Types.
import MenuRoutes from './MenuRoutes';

interface MenuItem {
  active: boolean;
  route: MenuRoutes;
  title: string;
}

export default MenuItem;
