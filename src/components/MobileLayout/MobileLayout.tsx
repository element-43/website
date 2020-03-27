import React from 'react';
import MediaQuery from 'react-responsive';

// Sizes.
import { sizes } from '../../theme/media';

export interface IProps {
  children: React.ReactNode;
}

export const MobileLayout: React.FC<IProps> = (props: IProps) => (
  <MediaQuery maxWidth={sizes.tablet}>{props.children}</MediaQuery>
);

export default MobileLayout;
