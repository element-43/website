import * as React from 'react';
import MediaQuery from 'react-responsive';

// Sizes.
import { sizes } from '../../styles/media';

export interface IProps {
  children: React.ReactNode;
}

export const DesktopLayout: React.FC<IProps> = (props: IProps) => (
  <MediaQuery minWidth={sizes.tablet}>{props.children}</MediaQuery>
);

export default DesktopLayout;
