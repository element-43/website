import * as React from 'react';
import MediaQuery from 'react-responsive';

export interface IProps {
  children: React.ReactNode;
}

export const MobileLayout: React.FC<IProps> = (props: IProps) => (
  <MediaQuery maxWidth={1110}>{props.children}</MediaQuery>
);

export default MobileLayout;
