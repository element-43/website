import { RouterState } from 'connected-react-router';

// Types.
import LayoutState from './LayoutState';

interface ApplicationState {
  layout: LayoutState;
  router: RouterState;
}

export default ApplicationState;
