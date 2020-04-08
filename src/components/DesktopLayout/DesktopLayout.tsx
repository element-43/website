import React from 'react';
import MediaQuery from 'react-responsive';

// Themes.
import { minSizes } from '../../theme/media';

export interface IProps {
  children: React.ReactNode;
}

export const DesktopLayout: React.FunctionComponent<IProps> = (
  props: IProps
) => <MediaQuery minWidth={minSizes.tablet}>{props.children}</MediaQuery>;

export default DesktopLayout;
