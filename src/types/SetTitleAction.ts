import { LayoutActionTypes } from '../enums';

interface SetTitleAction {
  title: string;
  type: LayoutActionTypes.SetTitle;
}

export default SetTitleAction;
