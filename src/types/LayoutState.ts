// Types.
import MenuConfig from './MenuConfig';

interface AsteroidsConfig {
  open: boolean;
}

interface LayoutState {
  asteroids: AsteroidsConfig;
  barrelRolling: boolean;
  menu: MenuConfig;
  terminal: TerminalConfig;
  title: string;
}

interface TerminalConfig {
  open: boolean;
}

export default LayoutState;
