import React from 'react';
import MediaQuery from 'react-responsive';

// Sizes.
import { minSizes } from '../../theme/media';

export interface IProps {
  children: React.ReactNode;
}

export const MobileLayout: React.FC<IProps> = (props: IProps) => (
  <MediaQuery maxWidth={minSizes.tablet}>{props.children}</MediaQuery>
);

export default MobileLayout;
