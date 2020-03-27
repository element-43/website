import React from 'react';
import MediaQuery from 'react-responsive';

// Theme.
import { sizes } from '../../theme/media';

export interface IProps {
  children: React.ReactNode;
}

export const DesktopLayout: React.FunctionComponent<IProps> = (
  props: IProps
) => <MediaQuery minWidth={sizes.tablet}>{props.children}</MediaQuery>;

export default DesktopLayout;
