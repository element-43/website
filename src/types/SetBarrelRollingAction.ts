import { LayoutActionTypes } from '../enums';

interface SetBarrelRollingAction {
  state: boolean;
  type: LayoutActionTypes.SetBarrelRolling;
}

export default SetBarrelRollingAction;
